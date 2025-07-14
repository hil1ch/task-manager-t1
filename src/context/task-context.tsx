// import React, { createContext, useState } from "react";

// interface ITask {
//     id: string;
//     heading: string;
//     description?: string;
//     category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
//     status:  'To Do' | 'In Progress' | 'Done';
//     priority:  'Low' | 'Medium' | 'High'
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export const TaskContext = createContext<ITask[] | undefined>(undefined);

// export function TaskContextProvider({ children}: { children: React.ReactNode }) {
//   const [tasks, setTasks] = useState([]);

//   function updateTask() {

//   }

//   return (
//     <TaskContext.Provider value={ tasks }>
//       {children}
//     </TaskContext.Provider>
//   );
// }

