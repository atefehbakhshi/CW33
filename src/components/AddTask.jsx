import styles from "./AddTask.module.css";

const AddTask = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles["input-task"]}
        type="text"
        placeholder="Add task"
      />
      <button className={styles["add-button"]}>+</button>
    </div>
  );
};

export default AddTask;
