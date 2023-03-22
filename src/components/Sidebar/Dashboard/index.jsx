import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <Button>Subcription</Button>
      <Button>Revenue</Button>
    </div>
  );
}

export default Dashboard;
