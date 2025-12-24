import { useTasks } from "../store/taskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        margin: "5px 0",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
        ❌
      </button>
    </li>
  );
}
