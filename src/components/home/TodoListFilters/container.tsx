import { useRecoilState } from "recoil";

import { todoListFilterState, isTodoListFilter } from "../states";
import { Props, TodoListFilters } from "./presenter";

export const TodoListFiltersContainer = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: Props["onChange"] = ({ target: { value } }) => {
    if (isTodoListFilter(value)) {
      setFilter(value);
    }
  };

  return <TodoListFilters filter={filter} onChange={updateFilter} />;
};
