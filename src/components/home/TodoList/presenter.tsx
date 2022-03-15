import { List } from "@mui/material";
import equal from "fast-deep-equal";
import { memo } from "react";

import { ITodoItem } from "../states";
import { TodoItem } from "../TodoItem";

type Props = {
  list: ITodoItem[];
};

const RawTodoList = ({ list }: Props) => (
  <List>
    {list.map(todoItem => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </List>
);

export const TodoList = memo(RawTodoList, equal);
