import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { memo } from "react";
import { selector, useRecoilValue } from "recoil";

import { todoListState } from "./states";

type Props = {
  total: number;
  totalCompleted: number;
  totalUncompleted: number;
  percentCompleted: number;
};

const StyledComponent = ({ total, totalCompleted, totalUncompleted, percentCompleted }: Props) => (
  <Table aria-label="todo list">
    <TableHead>
      <TableRow>
        <TableCell width="20%" align="right">
          Total
        </TableCell>
        <TableCell width="25%" align="right">
          Completed
        </TableCell>
        <TableCell width="25%" align="right">
          Not Completed
        </TableCell>
        <TableCell width="30%" align="right">
          Percent Completed
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell align="right">{total}</TableCell>
        <TableCell align="right">{totalCompleted}</TableCell>
        <TableCell align="right">{totalUncompleted}</TableCell>
        <TableCell align="right">{percentCompleted}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Component = memo(StyledComponent);

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

const Container = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <Component
      total={totalNum}
      totalCompleted={totalCompletedNum}
      totalUncompleted={totalUncompletedNum}
      percentCompleted={formattedPercentCompleted}
    />
  );
};

export default Container;
