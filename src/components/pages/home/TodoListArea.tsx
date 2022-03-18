import { Stack, styled } from "@mui/material";
import { memo } from "react";

import TodoItemCreator from "./TodoItemCreator";
import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const RawComponent = () => (
  <Stack spacing={4}>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />
    <TodoList />
  </Stack>
);

const StyledComponent = styled(RawComponent)``;

export const Component = memo(StyledComponent);

const Container = () => <Component />;

export default Container;
