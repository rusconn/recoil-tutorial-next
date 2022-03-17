import { Stack } from "@mui/material";
import { memo } from "react";

import TodoItemCreator from "./TodoItemCreator";
import TodoList from "./TodoList";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const StyledComponent = () => (
  <Stack spacing={4}>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />
    <TodoList />
  </Stack>
);

export const Component = memo(StyledComponent);

const Container = () => <Component />;

export default Container;
