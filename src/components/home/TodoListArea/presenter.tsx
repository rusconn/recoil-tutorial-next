import { Stack } from "@mui/material";
import { memo } from "react";

import { TodoItemCreator } from "../TodoItemCreator";
import { TodoList } from "../TodoList";
import { TodoListFilters } from "../TodoListFilters";
import { TodoListStats } from "../TodoListStats";

const RawTodoListArea = () => (
  <Stack spacing={4}>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />
    <TodoList />
  </Stack>
);

export const TodoListArea = memo(RawTodoListArea);
