import { Stack } from "@mui/material";

import { TodoItemCreator } from "../TodoItemCreator";
import { TodoList } from "../TodoList";
import { TodoListFilters } from "../TodoListFilters";
import { TodoListStats } from "../TodoListStats";

export const TodoListArea = () => (
  <Stack spacing={4}>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />
    <TodoList />
  </Stack>
);
