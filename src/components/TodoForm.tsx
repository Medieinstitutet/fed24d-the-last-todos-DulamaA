import { useState } from "react";
import type { TodoFormProps } from "../models/TodoTypes";

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [nyTodo, setNyTodo] = useState("");

  const läggTill = () => {
    onAdd(nyTodo);
    setNyTodo("");
  };

  return (
    <div className="mt-14">
      <h3 className="text-lg font-semibold mb-2">Lägg till ny rutin:</h3>
      <input
        type="text"
        value={nyTodo}
        onChange={(e) => setNyTodo(e.target.value)}
        placeholder="Skriv ny rutin..."
        className="border border-gray-400 rounded px-3 py-1 w-full max-w-xs text-black bg-white"
      />
      <button
        onClick={läggTill}
        className="bg-cyan-700 text-white rounded px-4 py-1.5 ml-3 hover:bg-cyan-800 transition"
      >
        Lägg till
      </button>
    </div>
  );
};

export default TodoForm;
