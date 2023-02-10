import axios from "axios";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import styles from "./FilterTask.module.css";

const BASE_URL = "http://localhost:3000/tasks";

export default function FilterTask() {
  const { list, setTaskList } = useContext(TaskContext);

  const filterList = (event) => {
    const filterText = event.target.value;

    if (filterText === "all") {
      axios.get(BASE_URL).then((response) => {
        setTaskList(response.data);
      });
    } else if (filterText === "done") {
      axios.get(`${BASE_URL}?checked=true`).then((response) => {
        setTaskList(response.data);
      });
    } else {
      axios.get(`${BASE_URL}?checked=false`).then((response) => {
        setTaskList(response.data);
      });
    }
  };

  return (
    <select className={styles["filter-select"]} onChange={filterList}>
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="undone">Undone</option>
    </select>
  );
}
