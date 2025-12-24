import { Routes, Route } from "react-router-dom";
import { useTasks } from "./store/taskContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

export default function App() {
  const { darkMode } = useTasks();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </div>
  );
}
