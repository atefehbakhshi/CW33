import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/tasks";

export const TaskContext = createContext({
  taskList: [],
  setTaskList: () => {},
  setNewTask: () => {},
});

const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((err) => console.log(err));
  }, [newTask]);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList, setNewTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
