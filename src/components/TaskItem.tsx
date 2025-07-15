import { Card, Typography, Divider } from "antd";
import type ITask from "../context/task-context";
import { getPriorityColor, getProgressIcon } from "../utils";

export function TaskItem({
  heading,
  description,
  category,
  priority,
  status,
}: ITask) {
  return (
    <div>
      <Card
        hoverable={true}
        title={heading}
        extra={<a href="#">Edit</a>}
        style={{ width: "400px", textAlign: "start" }}
      >
        <Typography.Paragraph
          ellipsis={{
            rows: 2,
            expandable: false,
          }}
        >
          {description}
        </Typography.Paragraph>
        <p>
          {getProgressIcon(status)} {status}
        </p>
        <p>
          {getPriorityColor(priority)} {priority}
        </p>
        <Divider />
        <p style={{ color: "gray" }}>{category.toUpperCase()}</p>
      </Card>
    </div>
  );
}
