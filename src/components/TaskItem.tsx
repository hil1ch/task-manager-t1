import { Card, Typography, Divider } from "antd";
import { StockOutlined, CheckOutlined, EditOutlined, ClockCircleOutlined } from "@ant-design/icons";

export function TaskItem() {
  return (
    <div>
      <Card
        hoverable={true}
        title=''
        extra={<a href="#">Edit</a>}
        style={{ width: '400px' }}
      >
        <Typography.Text>Card content</Typography.Text>
        <p><CheckOutlined /><EditOutlined /><ClockCircleOutlined /> Card content</p>
        <p><StockOutlined /> Card content</p>
        <Divider />
        <p> Card content</p>
      </Card>
    </div>
  );
}
