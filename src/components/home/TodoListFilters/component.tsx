import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { todoListFilters, todoListFilterState, isTodoListFilter } from "../states";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
    if (isTodoListFilter(value)) {
      setFilter(value);
    }
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={todoListFilters[0]}>All</option>
        <option value={todoListFilters[1]}>Completed</option>
        <option value={todoListFilters[2]}>Uncompleted</option>
      </select>
    </>
  );
};
