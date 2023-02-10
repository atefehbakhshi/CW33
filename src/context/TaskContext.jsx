import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/tasks";

export const TaskContext = createContext({
  taskList: [],
  setTaskList: () => {},
});

const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((err) => console.log(err));
  }, [taskList]);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
