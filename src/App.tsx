// import { TaskContextProvider } from "./context/task-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskList } from "./components/TaskList";
import { TaskDetails } from "./components/TaskDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <TaskContextProvider> */}
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      {/* </TaskContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
