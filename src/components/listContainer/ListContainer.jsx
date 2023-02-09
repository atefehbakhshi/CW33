import styles from "./ListContainer.module.css";
import ListItem from "./ListItem";

const tasksList = [
  {
    title: "class",
    id: 1,
  },
  {
    title: "exercise",
    id: 2,
  },
  {
    title: "dance",
    id: 3,
  },
  {
    title: "sleep",
    id: 4,
  },
];

export default function ListContainer() {
  return (
    <div className={styles["list-container"]}>
      {tasksList.map((task) => (
        <ListItem title={task.title} key={task.id} />
      ))}
    </div>
  );
}
