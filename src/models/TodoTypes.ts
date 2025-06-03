import { Todo } from './Todo';

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => unknown;
  onDelete: (id: number) => unknown;
};

export type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => unknown;
  onDelete: (id: number) => unknown;
};

export type TodoFormProps = {
  onAdd: (titel: string) => unknown;
};
