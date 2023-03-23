import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import config from "../../../config";

const cx = classNames.bind(styles);
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <Space>
        <Button onClick={() => navigate(config.routes.subcription)}>Subcription</Button>
        <Button onClick={() => navigate(config.routes.revenue)}>Revenue</Button>
      </Space>
    </div>
  );
}

export default Dashboard;
