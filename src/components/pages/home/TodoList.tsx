import { List, styled } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import equal from "fast-deep-equal";
import { memo } from "react";
import { selector, useRecoilValue } from "recoil";

import { ITodoItem, todoListFilterState, todoListState } from "./states";
import TodoItem from "./TodoItem";

type Props = Pick<CommonProps, "className"> & {
  list: ITodoItem[];
};

const RawComponent = ({ className, list }: Props) => (
  <List className={className}>
    {list.map(todoItem => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </List>
);

const StyledComponent = styled(RawComponent)``;

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
