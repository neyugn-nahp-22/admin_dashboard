import { Menu } from "antd";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <Menu
        defaultSelectedKeys={["/dashboard"]}
        className={cx("menu-item")}
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            key: "/dashboard",
          },
          {
            label: "Posts Management",
            key: "/posts",
          },
          {
            label: "Settings",
            key: "/settings",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default Sidebar;
