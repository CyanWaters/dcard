import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export const InfiniteScroll = (props) => {
  const { loadMore, component, loading } = props;
  const [request, setRequest] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document?.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document?.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document?.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom && !loading && !request) {
      // prevent to load multiple times in short period
      setRequest(true);
    }
  };

  useEffect(() => {
    if (request) {
      loadMore();
    }
  }, [request]);

  useEffect(() => {
    if (!loading && request) {
      setRequest(false);
    }
  }, [loading]);

  useEffect(() => {
    // mount
    window.addEventListener("scroll", handleScroll);
    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {component}{" "}
      {(() => {
        if (loading) {
          return (
            <div className="data-loading">
              <LoadingOutlined />
            </div>
          );
        }
      })()}
    </>
  );
};

export default InfiniteScroll;
