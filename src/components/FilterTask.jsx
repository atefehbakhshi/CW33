import styles from "./FilterTask.module.css";

export default function FilterTask() {
  return (
    <select className={styles["filter-select"]}>
      <option>All</option>
      <option>Done</option>
      <option>Undone</option>
    </select>
  );
}
