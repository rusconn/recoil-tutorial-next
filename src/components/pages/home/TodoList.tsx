import { List } from "@mui/material";
import equal from "fast-deep-equal";
import { memo } from "react";
import { selector, useRecoilValue } from "recoil";

import { ITodoItem, todoListFilterState, todoListState } from "./states";
import TodoItem from "./TodoItem";

type Props = {
  list: ITodoItem[];
};

const StyledComponent = ({ list }: Props) => (
  <List>
    {list.map(todoItem => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </List>
);

export const Component = memo(StyledComponent, equal);

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter(item => item.isComplete);
      case "Show Uncompleted":
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
});

const Container = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return <Component list={todoList} />;
};

export default Container;
