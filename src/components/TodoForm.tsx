import { useState } from "react";
import type { TodoFormProps } from "../models/TodoTypes";

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [nyTodo, setNyTodo] = useState("");

  const läggTill = () => {
    onAdd(nyTodo);
    setNyTodo("");
  };

  return (
    <div style={{ marginTop: "55px" }}>
      <h3>Lägg till ny rutin:</h3>
      <input
        type="text"
        value={nyTodo}
        onChange={(e) => setNyTodo(e.target.value)}
        placeholder="Skriv ny rutin..."
      />
      <button onClick={läggTill} style={{ marginLeft: "10px" }}>
        Lägg till
      </button>
    </div>
  );
};

export default TodoForm;
