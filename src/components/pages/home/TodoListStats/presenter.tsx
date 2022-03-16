import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { memo } from "react";

type Props = {
  total: number;
  totalCompleted: number;
  totalUncompleted: number;
  percentCompleted: number;
};

const RawTodoListStats = ({ total, totalCompleted, totalUncompleted, percentCompleted }: Props) => (
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

export const TodoListStats = memo(RawTodoListStats);
