import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

import { TodoListFilter, todoListFilters } from "../states";

export type Props = {
  filter: TodoListFilter;
  onChange: (e: SelectChangeEvent) => void;
};

export const TodoListFilters = ({ filter, onChange }: Props) => (
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
