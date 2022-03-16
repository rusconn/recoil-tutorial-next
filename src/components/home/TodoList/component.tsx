import { List } from "@mui/material";
import { useRecoilValue } from "recoil";

import { TodoItem } from "../TodoItem";
import { filteredTodoListState } from "./selector";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <List>
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </List>
  );
};
