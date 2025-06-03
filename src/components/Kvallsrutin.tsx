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
  const [nyTodo, setNyTodo] = useState("");

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

  const läggTillTodo = () => {
    if (nyTodo.trim() === "") return;

    const nyttTodo: Todo = {
      id: Date.now(),
      titel: nyTodo,
      klar: false,
    };

    const uppdaterad = [...todos, nyttTodo];
    setTodos(uppdaterad);
    localStorage.setItem("kvallsTodos", JSON.stringify(uppdaterad));
    setNyTodo("");
  };

  return (
    <div>
      <h2>Kvällsrutin</h2>

      <h3>Att göra</h3>
      <ul className="kvallslista">
        {todos
          .filter((todo) => !todo.klar)
          .map((todo) => (
            <li key={todo.id} className="">
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

      <h3 style={{ marginTop: "30px" }}>Klart</h3>
      <ul className="kvallslista">
        {todos
          .filter((todo) => todo.klar)
          .map((todo) => (
            <li key={todo.id} className="klar">
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

      <div style={{ marginTop: "55px" }}>
        <h3>Lägg till ny rutin:</h3>
        <input
          type="text"
          value={nyTodo}
          onChange={(e) => setNyTodo(e.target.value)}
          placeholder="Skriv ny rutin..."
        />
        <button onClick={läggTillTodo} style={{ marginLeft: "10px" }}>
          Lägg till
        </button>
      </div>
    </div>
  );
};

export default Kvallsrutin;
