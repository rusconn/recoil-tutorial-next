import { useRecoilState } from "recoil";

import { todoListFilterState, isTodoListFilter } from "../states";
import { Props } from "./presenter";

export const useTodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: Props["onChange"] = ({ target: { value } }) => {
    if (isTodoListFilter(value)) {
      setFilter(value);
    }
  };

  return { filter, updateFilter };
};
