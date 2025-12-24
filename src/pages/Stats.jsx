import { useTasks } from "../store/taskContext";

export default function Stats() {
  const { tasks } = useTasks();
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = tasks.length - completed;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Stats</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Remaining Tasks: {remaining}</p>
    </div>
  );
}
