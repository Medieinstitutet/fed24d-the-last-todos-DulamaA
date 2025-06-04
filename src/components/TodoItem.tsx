import type { TodoItemProps } from "../models/TodoTypes";

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li
      className={`flex justify-between items-center mb-2 p-3 rounded ${
        todo.klar ? "line-through text-gray-400" : "text-white"
      } bg-black`}
    >
      <label className="flex items-center gap-4 flex-1 ">
        <input
          type="checkbox"
          checked={todo.klar}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 border border-black text-black checked:bg-black"
        />
        <span className="text-lg text-center flex-1">{todo.titel}</span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-cyan-700 text-white px-3 py-1 rounded hover:bg-cyan-800"
      >
        Ta bort
      </button>
    </li>
  );
};

export default TodoItem;
