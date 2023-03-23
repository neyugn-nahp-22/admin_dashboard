import { Button, DatePicker, Form, Input, Typography } from "antd";
import classNames from "classnames/bind";
import { ColorPicker } from "primereact/colorpicker";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useState } from "react";
import styles from "./Settings.module.scss";
const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);

function Settings() {
  const [form] = Form.useForm();
  const titleForm = Form.useWatch("title", form);
  const emailForm = Form.useWatch("email", form);
  const colorForm = Form.useWatch("colorPicker", form);
  const dateForm = Form.useWatch("datePicker", form);
  const [color, setColor] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  return (
    <div style={{ backgroundColor: `#${color}` }} className={cx("wrapper")}>
      <Typography.Title level={4} className={cx("title")}>
        Settings
      </Typography.Title>
      <div>
        <Form form={form} layout="vertical" name="title" style={{ width: 400 }} onFinish={onSubmit}>
          <div className={cx("container")}>
            <div className={cx("form-input")}>
              <Form.Item
                label="Title: "
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Background Color: "
                name="colorPicker"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này",
                  },
                ]}
              >
                <div>
                  <div className={cx("color-picker")}>
                    <Input value={`#${color}`} className={cx("type")} />
                    <ColorPicker
                      className={cx("color")}
                      value={color}
                      onChange={(e) => setColor(e.value)}
                    />
                  </div>
                </div>
              </Form.Item>
            </div>
            <div className={cx("form-picker")}>
              <div className={cx("form-email")}>
                <Form.Item
                  label="Email: "
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập trường này",
                    },
                    {
                      type: "email",
                      message: "Email is invalid",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                label="Active date: "
                name="datePicker"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này",
                  },
                ]}
              >
                <RangePicker
                  style={{ width: 300 }}
                  showTime={{
                    format: "HH:mm",
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={onChange}
                  onOk={onOk}
                />
              </Form.Item>
            </div>
          </div>
          {titleForm || emailForm || colorForm || dateForm || color ? (
            <Button className="close-button" key="submit" htmlType="submit" type="primary">
              Save
            </Button>
          ) : (
            ""
          )}
        </Form>
      </div>
    </div>
  );
}

export default Settings;
