import styles from "./ListItem.module.css";

export default function ListItem({ title }) {
  return (
    <div className={styles.task}>
      <p className={styles["task-title"]}>{title}</p>
      <div className={styles["buttons-container"]}>
        <button className={styles["task-buttons"]}>&#10003;</button>
        <button className={styles["task-buttons"]}>Trash</button>
      </div>
    </div>
  );
}
