import { useState } from "react";
import { Todo, startTodos } from "../models/Todo";

export const Kvallsrutin = () => {
  const [todos, setTodos] = useState<Todo[]>(startTodos);

  const taBortTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Kvällsrutin</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => taBortTodo(todo.id)}
            style={{ cursor: "pointer" }}
          >
            {todo.titel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kvallsrutin;
