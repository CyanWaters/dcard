import React, { useState, useEffect } from "react";

import { Spin } from "antd";

import "./styles/index.css";

export const InfiniteScroll = (props) => {
  const { loadMore, component, loading } = props;
  const [request, setRequest] = useState(false);

  const handleOnScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom && !request && !loading) {
      setRequest(true);
      loadMore();
      setRequest(false);
    }
  };

  useEffect(() => {
    // mount
    window.addEventListener("scroll", handleOnScroll);
    // unmount
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);
  return (
    <>
      {component}{" "}
      {(() => {
        if (true) {
          return <div className="data-loading">Loading..</div>;
        }
      })()}
    </>
  );
};

export default InfiniteScroll;
