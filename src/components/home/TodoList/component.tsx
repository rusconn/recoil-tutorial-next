import { useRecoilValue } from "recoil";

import { TodoItem } from "../TodoItem";
import { TodoItemCreator } from "../TodoItemCreator";
import { TodoListFilters } from "../TodoListFilters";
import { TodoListStats } from "../TodoListStats";
import { filteredTodoListState } from "./selector";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      <ul>
        {todoList.map(todoItem => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </ul>
    </>
  );
};
