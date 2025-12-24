import { useState } from "react";
import { useTasks } from "../store/taskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div >
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        style={{ 
          width: "300px",
          height: "50px",
          margin: "20px 0",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          display: "flex",
          gap: "10px",
          alignItems: "center"
     }}
      />
      <button style={{
        width: "100px",
        height: "50px",
        padding: "5px 10px",
        border: "none",
        borderRadius: "3px",
        backgroundColor: "rgba(21, 156, 201, 0.47)",
        color: "#fff",
        cursor: "pointer"
      }}
       onClick={handleAdd}>Add Task</button>
    </div>
  );
}
