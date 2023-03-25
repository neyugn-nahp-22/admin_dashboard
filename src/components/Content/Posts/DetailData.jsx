import { EyeOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./DetailData.module.scss";

const cx = classNames.bind(styles);

const DetailData = ({ userId, title, body }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <EyeOutlined onClick={showModal} />
      <Modal
        width={800}
        className={cx("modal")}
        title="Chi tiết bài viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={cx("wrapper")}>
          <div className={cx("id-user")}>
            <label>ID: </label>
            <span>{userId}</span>
          </div>
          <div className={cx("title")}>
            <label>Tiêu đề: </label>
            <span>{title}</span>
          </div>
          <div>
            <label className={cx("content")}>Nội dung: </label>
            <span>{body}</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DetailData;
