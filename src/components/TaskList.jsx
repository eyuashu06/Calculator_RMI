import TaskItem from "./TaskItem";
import { useTasks } from "../store/taskContext";

export default function TaskList() {
  const { tasks } = useTasks();

  if (!tasks || tasks.length === 0) return <p>No tasks yet</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
