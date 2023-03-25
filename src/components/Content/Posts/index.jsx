import { Button, Col, Form, Input, Row, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPosts } from "../../../api/postsApi";
import DetailData from "./DetailData";

function Posts() {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();
  const searchValue = Form.useWatch("search", form);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((posts) => {
        setDataSource(posts);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (searchValue?.length === 0) {
      getPosts()
        .then((posts) => {
          setDataSource(posts);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [searchValue]);

  const handleSubmit = (data) => {
    if (data?.length === 0) {
      getPosts()
        .then((posts) => {
          setDataSource(posts);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setDataSource(dataSource.filter((item) => item?.title.includes(searchValue)));
    }
  };

  return (
    <>
      <Typography.Title style={{ color: "#4096ff" }} level={4}>
        Users Management
      </Typography.Title>
      <Form layout="inline" form={form} onFinish={handleSubmit}>
        <Row
          gutter={[24, 24]}
          className="auto-wrap"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Col xs={24} md={15}>
            <Form.Item name="search">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={9}>
            <Button style={{ border: "1px solid #4096ff" }} type="submit" htmlType="submit">
              SEARCH
            </Button>
          </Col>
        </Row>
      </Form>
      <Table
        columns={[
          { title: "User ID", dataIndex: "userId", key: "userId", width: 200 },
          { title: "ID", dataIndex: "id", key: "id", width: 200 },
          { title: "Title", dataIndex: "title", key: "title", width: 700 },
          {
            title: "Action",
            width: 200,
            render: (value) => {
              return <DetailData userId={value.id} title={value.title} body={value.body} />;
            },
          },
        ]}
        loading={isLoading}
        dataSource={dataSource}
        rowKey="id"
      ></Table>
    </>
  );
}

export default Posts;
