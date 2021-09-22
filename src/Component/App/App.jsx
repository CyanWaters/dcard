import React, { useState, useEffect, useCallback } from "react";
import { Input, Layout, Button, Table } from "antd";

import { InfiniteScroll } from "../InfiniteScroll";
import { searchRepoFromGitHub, debounce } from "../../lib";

import "./styles/index.css";

const DEFAULT_COUNT = 30;
const DEFAULT_PAGE = 1;
const DELAY_INPUT_TIME = 600;

export const App = () => {
  const [repoName, setRepoName] = useState("");
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const { Header, Footer, Sider, Content } = Layout;
  // Table Columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Latest Updated Time",
      dataIndex: "updated_at",
      key: "updated_at",
    },
  ];

  const onChangeRepoName = useCallback((e) => {
    debounce(() => setRepoName(e?.target?.value), DELAY_INPUT_TIME)();
  }, []);
  const onChangeCount = useCallback((e) => {
    debounce(() => setCount(e?.target?.value), DELAY_INPUT_TIME)();
  }, []);
  const onChangePage = useCallback((e) => {
    debounce(() => setPage(e?.target?.value), DELAY_INPUT_TIME)();
  }, []);

  const disalbeButton = !(repoName && page && count);

  const getRepo = async (cleanDataSource = false) => {
    setLoading(true);
    const { items, totalCount } = await searchRepoFromGitHub(
      repoName,
      count,
      page
    );
    const data = items.map((item, index) => {
      const obj = {
        key: index,
        name: item?.name,
        url: item?.url,
        updated_at: item?.updated_at,
      };
      return obj;
    });
    setDataSource(cleanDataSource ? data : dataSource.concat(data));
    setLoading(false);
  };
  const loadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);
  const tableComponenet = (
    <Table
      className="repo-table"
      dataSource={dataSource}
      columns={columns}
      pagination={false}
    />
  );

  useEffect(() => {
    if (!disalbeButton) {
      getRepo(true);
    }
  }, [repoName]);
  useEffect(() => {
    if (!disalbeButton) {
      getRepo();
    }
  }, [page, count]);

  return (
    <div className="app">
      <Layout>
        <Header className="header">GitHub</Header>
        <Content>
          <div>
            <p className="field-name">Repoitory Name:</p>
            <Input
              data-testid="repoName"
              placeholder="Repo Name"
              onChange={onChangeRepoName}
            />
          </div>
          <div>
            <p className="field-name"> Per Page Count:</p>
            <Input
              type="number"
              placeholder="Count"
              min={1}
              onChange={onChangeCount}
              defaultValue={count}
            />
          </div>
          <div>
            <p className="field-name"> Page:</p>
            <Input
              type="number"
              placeholder="Page"
              min={1}
              onChange={onChangePage}
              value={page}
              disabled
            />
          </div>
          {/* Search Button */}
          {/* <div className="button-align-center">
            <Button type="primary" disabled={disalbeButton} onClick={getRepo}>
              Search
            </Button>
          </div> */}
          {disalbeButton || !dataSource.length ? (
            loading ? (
              <div className="data-loading">Loading...</div>
            ) : (
              <div className="field-name">None</div>
            )
          ) : (
            <InfiniteScroll
              key={`${count}+${page}+${loading}`}
              loadMore={loadMore}
              component={tableComponenet}
              loading={loading}
            />
          )}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
};

export default App;
