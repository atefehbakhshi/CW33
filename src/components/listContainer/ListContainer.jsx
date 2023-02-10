import axios from "axios";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import styles from "./ListContainer.module.css";
import ListItem from "./ListItem";

export default function ListContainer() {
  const { taskList } = useContext(TaskContext);

  return (
    <div className={styles["list-container"]}>
      {taskList.map((task) => (
        <ListItem
          title={task.title}
          key={task.id}
          id={task.id}
          checked={task.checked}
        />
      ))}
    </div>
  );
}
