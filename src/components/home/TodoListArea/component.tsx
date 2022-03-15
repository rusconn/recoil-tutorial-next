import { TodoItemCreator } from "../TodoItemCreator";
import { TodoList } from "../TodoList";
import { TodoListFilters } from "../TodoListFilters";
import { TodoListStats } from "../TodoListStats";

export const TodoListArea = () => (
  <>
    <TodoListStats />
    <TodoListFilters />
    <TodoItemCreator />
    <TodoList />
  </>
);
