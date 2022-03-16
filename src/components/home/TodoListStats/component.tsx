import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useRecoilValue } from "recoil";

import { todoListStatsState } from "./selector";

export const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
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
          <TableCell align="right">{totalNum}</TableCell>
          <TableCell align="right">{totalCompletedNum}</TableCell>
          <TableCell align="right">{totalUncompletedNum}</TableCell>
          <TableCell align="right">{formattedPercentCompleted}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
