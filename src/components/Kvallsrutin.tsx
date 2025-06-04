import { useState } from "react";
import { startTodos, Todo } from "../models/Todo";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

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
  const [oklara, setOklara] = useState(true);

  const uppdateraStorage = (lista: Todo[]) => {
    setTodos(lista);
    localStorage.setItem("kvallsTodos", JSON.stringify(lista));
  };

  const taBortTodo = (id: number) => {
    uppdateraStorage(todos.filter((todo) => todo.id !== id));
  };

  const markeraSomKlar = (id: number) => {
    const uppdaterad = todos.map((todo) =>
      todo.id === id ? { ...todo, klar: !todo.klar } : todo
    );
    uppdateraStorage(uppdaterad);
  };

  const läggTillTodo = (titel: string) => {
    if (titel.trim() === "") return;
    const nytt: Todo = {
      id: Date.now(),
      titel,
      klar: false,
    };
    uppdateraStorage([...todos, nytt]);
  };

  const sorteradeTodos = [...todos].sort((a, b) =>
    oklara ? Number(a.klar) - Number(b.klar) : Number(b.klar) - Number(a.klar)
  );

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="text-left mb-6">
        <h2 className="text-xl font-semibold mb-2">Kvällsrutin</h2>
        <button
          onClick={() => setOklara(!oklara)}
          className="bg-cyan-700 hover:bg-cyan-800 text-white font-medium py-1 px-4 rounded"
        >
          Sortera: {oklara ? "Oklara" : "Klara"}
        </button>
      </div>

      <TodoList
        todos={sorteradeTodos}
        onToggle={markeraSomKlar}
        onDelete={taBortTodo}
      />

      <TodoForm onAdd={läggTillTodo} />
    </div>
  );
};

export default Kvallsrutin;
