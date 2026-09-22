import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { status } = todo;

  const handleChange = (e) =>
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  const handleDelete = () => onDelete(todo);
  return (
    <li key={todo.id} className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={todo.id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.btn}>
          🗑️
        </button>
      </span>
    </li>
  );
}
