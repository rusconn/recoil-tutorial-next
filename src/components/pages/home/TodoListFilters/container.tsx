import { useTodoListFilters } from "./hook";
import { TodoListFilters } from "./presenter";

export const TodoListFiltersContainer = () => {
  const { filter, updateFilter } = useTodoListFilters();

  return <TodoListFilters filter={filter} onChange={updateFilter} />;
};
