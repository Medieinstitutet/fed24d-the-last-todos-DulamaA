import TodoItem from "./../components/TodoItem";
import { Todo } from "../models/Todo";
import type { TodoListProps } from "../models/TodoTypes";

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="kvallslista">
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
