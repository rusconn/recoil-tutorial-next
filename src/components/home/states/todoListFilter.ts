import { atom } from "recoil";

export const todoListFilters = ["Show All", "Show Completed", "Show Uncompleted"] as const;

export type TodoListFilter = typeof todoListFilters[number];

export const isTodoListFilter = (str: string): str is TodoListFilter =>
  todoListFilters.includes(str as TodoListFilter);

export const todoListFilterState = atom<TodoListFilter>({
  key: "todoListFilterState",
  default: "Show All",
});
