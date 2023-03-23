import { EyeOutlined } from "@ant-design/icons";
import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPosts } from "../../../api/postsApi";

function Posts() {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((posts) => {
        setDataSource(posts);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Typography.Title style={{ color: "#4096ff" }} level={4}>
        Users Management
      </Typography.Title>
      <Table
        columns={[
          { title: "User ID", dataIndex: "userId", key: "userId", width: 200 },
          { title: "ID", dataIndex: "id", key: "id", width: 200 },
          { title: "Title", dataIndex: "title", key: "title", width: 700 },
          {
            title: "Action",
            width: 200,
            render: () => {
              return <EyeOutlined onClick={(value, record) => {}} />;
            },
          },
        ]}
        loading={isLoading}
        dataSource={dataSource}
      ></Table>
    </>
  );
}

export default Posts;
