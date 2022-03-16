import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "./selector";

export const useTodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return { todoList };
};
