import { Card, Typography, Divider } from "antd";
// import { ExclamationCircleFilled, CheckCircleFilled, EditFilled, ClockCircleFilled } from "@ant-design/icons";

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
        {/* <p><CheckCircleFilled /><EditFilled /><ClockCircleFilled /> Card content</p> */}
        {/* <p><ExclamationCircleFilled /> Card content</p> */}
        <Divider />
        <p> Card content</p>
      </Card>
    </div>
  );
}
