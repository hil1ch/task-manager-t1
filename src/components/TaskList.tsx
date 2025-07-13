import { Typography } from "antd";
import { TaskItem } from "./TaskItem";
import { TaskDetails } from "./TaskDetails";

export function TaskList() {
  return (
    <div>
      <Typography.Title level={1}>Tasks</Typography.Title>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '16px',
        justifyContent: 'center',
        maxWidth: 'calc(400px * 3 + 16px * 2)'
      }}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
      <TaskDetails />
    </div>
  );
}