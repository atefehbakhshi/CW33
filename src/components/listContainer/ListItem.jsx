import styles from "./ListItem.module.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const BASE_URL = "http://localhost:3000/tasks";

export default function ListItem({ title, id, checked }) {
  const checkedTask = () => {
    axios
      .put(`${BASE_URL}/${id}`, { title: title, id: id, checked: !checked })
      .then((res) => {
        toast.success("Item checked");
      });
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
        <button className={styles["task-buttons"]}>
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
