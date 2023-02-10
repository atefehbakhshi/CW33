import styles from "./ListItem.module.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

const BASE_URL = "http://localhost:3000/tasks";

export default function ListItem({ title, id, checked }) {
  const { setNewTask } = useContext(TaskContext);
  const checkedTask = () => {
    axios
      .put(`${BASE_URL}/${id}`, { title: title, id: id, checked: !checked })
      .then((res) => {
        if (checked) {
          toast.error("Item not done");
        } else {
          toast.success("Item done");
        }
      });
    setNewTask((prev) => !prev);
  };

  const deleteTask = () => {
    axios.delete(`${BASE_URL}/${id}`).then((res) => {
      toast.warn("Item deleted");
    });
    setNewTask((prev) => !prev);
  };

  return (
    <div className={styles.task}>
      <p
        className={styles["task-title"]}
        style={
          checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </p>
      <div className={styles["buttons-container"]}>
        <button
          className={styles["task-buttons"]}
          onClick={checkedTask}
          style={
            checked
              ? { backgroundColor: "green" }
              : { backgroundColor: "rgb(1 192 161)" }
          }
        >
          &#10003;
        </button>
        <button className={styles["task-buttons"]} onClick={deleteTask}>
          <Icon
            icon="mdi-light:delete"
            style={{
              fontSize: "1.5rem",
              color: "white",
            }}
          />
        </button>
      </div>
    </div>
  );
}
