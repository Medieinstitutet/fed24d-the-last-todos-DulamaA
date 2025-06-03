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
  const [oklara, setOklara] = useState(true);

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

  const sorteradeTodos = [...todos].sort((a, b) =>
    oklara ? Number(a.klar) - Number(b.klar) : Number(b.klar) - Number(a.klar)
  );

  return (
    <div>
      <h2>Kvällsrutin</h2>

      <button onClick={() => setOklara(!oklara)}>
        Sortera: {oklara ? "Oklara" : "Klara"}
      </button>

      <ul className="kvallslista">
        {sorteradeTodos.map((todo) => (
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
