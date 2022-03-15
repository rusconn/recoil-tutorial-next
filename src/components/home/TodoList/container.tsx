import { useTodoList } from "./hook";
import { TodoList } from "./presenter";

export const TodoListContainer = () => {
  const { todoList } = useTodoList();

  return <TodoList list={todoList} />;
};
