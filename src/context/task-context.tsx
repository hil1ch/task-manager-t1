import React, { createContext, useState, useContext } from "react";
import cards from "../data";

export default interface ITask {
  id: string;
  heading: string;
  description?: string;
  category: "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
}

interface ITaskContext {
  tasks: ITask[];
  updateTask: (updatedTask: ITask) => void;
}

const TaskContext = createContext<ITaskContext | undefined>(undefined);

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<ITask[]>(cards);

  const updateTask = (updatedTask: ITask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTask must be used within an AuthProvider");
  }
  return context;
}
