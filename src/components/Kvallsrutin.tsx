import { useState } from "react";
import { startTodos, Todo } from "../models/Todo";
import "./Kvallsrutin.css";

const hämtaTodoLista = (): Todo[] => {
  const sparad = localStorage.getItem("kvallsTodos");
  if (sparad) {
    const parsed = JSON.parse(sparad);
    return parsed.length > 0 ? parsed : startTodos;
  }
  return startTodos;
};

export const Kvallsrutin = () => {
  const [todos, setTodos] = useState<Todo[]>(hämtaTodoLista());

  const taBortTodo = (id: number) => {
    const uppdaterad = todos.filter((todo) => todo.id !== id);
    setTodos(uppdaterad);
    localStorage.setItem("kvallsTodos", JSON.stringify(uppdaterad));
  };

  const markeraSomKlar = (id: number) => {
    const uppdaterad = todos.map((todo) =>
      todo.id === id ? { ...todo, klar: !todo.klar } : todo
    );
    setTodos(uppdaterad);
    localStorage.setItem("kvallsTodos", JSON.stringify(uppdaterad));
  };

  return (
    <div>
      <h2>Kvällsrutin</h2>
      <ul className="kvallslista">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.klar ? "klar" : ""}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flex: 1,
              }}
            >
              <input
                type="checkbox"
                checked={todo.klar}
                onChange={() => markeraSomKlar(todo.id)}
              />
              <span>{todo.titel}</span>
            </label>
            <button onClick={() => taBortTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kvallsrutin;
