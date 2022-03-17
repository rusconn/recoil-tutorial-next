import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { memo, useCallback } from "react";
import { useRecoilState } from "recoil";

import { isTodoListFilter, TodoListFilter, todoListFilters, todoListFilterState } from "./states";

type Props = {
  filter: TodoListFilter;
  onChange: (e: SelectChangeEvent) => void;
};

const StyledComponent = ({ filter, onChange }: Props) => (
  <FormControl variant="standard" fullWidth>
    <InputLabel id="todo-list-filters-label">Filter</InputLabel>
    <Select
      labelId="todo-list-filters-label"
      id="todo-list-filters"
      value={filter}
      onChange={onChange}
    >
      <MenuItem value={todoListFilters[0]}>All</MenuItem>
      <MenuItem value={todoListFilters[1]}>Completed</MenuItem>
      <MenuItem value={todoListFilters[2]}>Uncompleted</MenuItem>
    </Select>
  </FormControl>
);

export const Component = memo(StyledComponent);

const Container = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: Props["onChange"] = useCallback(
    ({ target: { value } }) => {
      if (isTodoListFilter(value)) {
        setFilter(value);
      }
    },
    [setFilter]
  );

  return <Component filter={filter} onChange={updateFilter} />;
};

export default Container;
