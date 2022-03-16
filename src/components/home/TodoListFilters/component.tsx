import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useRecoilState } from "recoil";

import { todoListFilters, todoListFilterState, isTodoListFilter } from "../states";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }: SelectChangeEvent) => {
    if (isTodoListFilter(value)) {
      setFilter(value);
    }
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="todo-list-filters-label">Filter</InputLabel>
      <Select
        labelId="todo-list-filters-label"
        id="todo-list-filters"
        value={filter}
        onChange={updateFilter}
      >
        <MenuItem value={todoListFilters[0]}>All</MenuItem>
        <MenuItem value={todoListFilters[1]}>Completed</MenuItem>
        <MenuItem value={todoListFilters[2]}>Uncompleted</MenuItem>
      </Select>
    </FormControl>
  );
};
