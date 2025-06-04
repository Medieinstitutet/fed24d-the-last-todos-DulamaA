import type { TodoItemProps } from "../models/TodoTypes";

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className={todo.klar ? "line-through text-gray-400" : ""}>
      <label
        style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}
      >
        <input
          type="checkbox"
          checked={todo.klar}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.titel}</span>
      </label>
      <button onClick={() => onDelete(todo.id)}>Ta bort</button>
    </li>
  );
};

export default TodoItem;
