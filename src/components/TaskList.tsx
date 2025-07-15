import { Typography } from "antd";
import { useTask } from "../context/task-context";
import { TaskItem } from "./TaskItem";
import { TaskDetails } from "./TaskDetails";
import type ITask from "../context/task-context";

export function TaskList() {
  const {tasks} = useTask();

  return (
    <div>
      <Typography.Title level={1}>Tasks</Typography.Title>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          maxWidth: "calc(400px * 3 + 16px * 2)",
        }}
      >
        {tasks.map((task: ITask) => {
          return (
            <TaskItem
              key={task.id} 
              id={task.id}
              heading={task.heading}
              description={task.description}
              category={task.category}
              priority={task.priority}
              status={task.status}
            />
          );
        })}
      </div>
      <TaskDetails />
    </div>
  );
}
