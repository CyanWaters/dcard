import React, { useState, useEffect, useCallback } from "react";
import { Input, Layout, Table } from "antd";
import {
  createFromIconfontCN,
  LoadingOutlined,
  GithubOutlined,
  FileOutlined,
} from "@ant-design/icons";

import { InfiniteScroll } from "../InfiniteScroll";
import { searchRepoFromGitHub, debounce } from "../../lib";

import "./styles/index.css";

const DEFAULT_COUNT = 30;
const DEFAULT_PAGE = 1;
const DELAY_INPUT_TIME = 600;
const GITHUB_URL = "https://github.com/CyanWaters";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export const App = () => {
  const [repoName, setRepoName] = useState("");
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const { Header, Footer, Sider, Content } = Layout;

  const disalbeButton = !(repoName && page && count);
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

  const getRepo = async (cleanDataSource = false) => {
    setLoading(true);
    const {
      items,
      totalCount,
      error = false,
      errorMessage: err = "",
    } = await searchRepoFromGitHub(repoName, count, page);
    if (error) {
      setErrorMessage(err);
    } else {
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
      setErrorMessage("");
    }
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
      // detect repoName is the same or not
      getRepo(true);
    }
  }, [repoName]);
  useEffect(() => {
    if (!disalbeButton) {
      getRepo();
    }
  }, [page, count]);

  return (
    <>
      <div className="app">
        <Layout>
          <Header className="header">
            <a className="link" href={GITHUB_URL} target="popup">
              <GithubOutlined /> GitHub
            </a>
            <div className="float-right link">
              <IconFont type="icon-tuichu" />
            </div>
            <div className="clear-float" />
          </Header>
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
            {errorMessage ? (
              <div className="field-name no-data">
                {`Something went wrong: ${errorMessage}`}
              </div>
            ) : disalbeButton || !dataSource.length ? (
              loading ? (
                <div className="data-loading">
                  <LoadingOutlined />
                </div>
              ) : (
                <div className="field-name no-data">
                  <FileOutlined />
                  No Data
                </div>
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
    </>
  );
};

export default App;
