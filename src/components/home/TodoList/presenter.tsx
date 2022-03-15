import { List } from "@mui/material";

import { ITodoItem } from "../states";
import { TodoItem } from "../TodoItem";

type Props = {
  list: ITodoItem[];
};

export const TodoList = ({ list }: Props) => (
  <List>
    {list.map(todoItem => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </List>
);
