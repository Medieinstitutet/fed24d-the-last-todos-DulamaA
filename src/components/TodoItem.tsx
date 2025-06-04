import type { TodoItemProps } from "../models/TodoTypes";

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li
      className={`flex justify-between items-center mb-2.5 p-2.5 rounded-lg ${
        todo.klar
          ? "bg-[#1e1e1e] text-gray-400 line-through"
          : "bg-[#1e1e1e] text-white"
      }`}
    >
      <label className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.klar}
          onChange={() => onToggle(todo.id)}
        />
        <span className="flex-1 cursor-pointer">{todo.titel}</span>
      </label>
      <button
        className="bg-orange-900 text-white rounded px-3 py-1.5"
        onClick={() => onDelete(todo.id)}
      >
        Ta bort
      </button>
    </li>
  );
};

export default TodoItem;
