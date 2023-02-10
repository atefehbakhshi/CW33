import { useRef } from "react";
import styles from "./AddTask.module.css";
import axios from "axios";

const BASE_URL = "http://localhost:3000/tasks";

const newTask = {
  title: "",
  id: 0,
  checked: false,
};

const sendData = () => {
  axios
    .post(BASE_URL, newTask)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

const AddTask = () => {
  const inputTask = useRef(null);

  const getTask = () => {
    newTask.title = inputTask.current.value;
  };

  const addTolist = () => {
    newTask.id = Math.random();
    sendData();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles["input-task"]}
        type="text"
        placeholder="Add task"
        ref={inputTask}
        onChange={getTask}
      />
      <button className={styles["add-button"]} onClick={addTolist}>
        +
      </button>
    </div>
  );
};

export default AddTask;
