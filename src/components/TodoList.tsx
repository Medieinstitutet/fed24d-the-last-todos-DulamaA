import TodoItem from "./../components/TodoItem";
import { Todo } from "../models/Todo";
import type { TodoListProps } from "../models/TodoTypes";

// Lista med todos, renderar varje todo som en TodoItem
const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
