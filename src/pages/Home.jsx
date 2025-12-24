import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <TaskInput />
      <TaskList />
    </div>
  );
}
