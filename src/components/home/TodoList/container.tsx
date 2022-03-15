import { useRecoilValue } from "recoil";

import { TodoList } from "./presenter";
import { filteredTodoListState } from "./selector";

export const TodoListContainer = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return <TodoList list={todoList} />;
};
