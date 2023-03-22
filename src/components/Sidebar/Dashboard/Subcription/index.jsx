import { Button, Card, Space } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import classNames from "classnames/bind";
import styles from "./Subcription.module.scss";
import { useNavigate } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Subcription() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 2",
        data: [100, 130, 123, 153, 124, 175, 143],
        backgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(53, 162, 235, 0.5)",
        ],
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <Card className={cx("wrapper")}>
      <Space>
        <Button className={cx("more-btn")} onClick={() => navigate(config.routes.subcription)}>
          Subcription
        </Button>
        <Button onClick={() => navigate(config.routes.revenue)}>Revenue</Button>
      </Space>
      <Bar options={options} data={data} />
    </Card>
  );
}

export default Subcription;
