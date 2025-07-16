import { Card, Typography, Divider } from "antd";
import { Link } from "react-router-dom";
import type ITask from "../context/task-context";
import { getPriorityColor, getProgressIcon } from "../utils";

export function TaskItem({
  id,
  heading,
  description,
  category,
  priority,
  status,
}: ITask) {
  return (
    <div>
      <Link to={`/task/${id}`} style={{textDecoration: 'none', color: "inherit", fontWeight: '400'}}>
        <Card
          hoverable={true}
          title={heading}
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
      </Link>
    </div>
  );
}
