import { Link } from "react-router-dom";
import { useTasks } from "../store/taskContext";

export default function Header() {
  const { darkMode, setDarkMode } = useTasks();

  return (
    <header
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Task Tracker</h1>
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/stats">Stats</Link>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
