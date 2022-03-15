import { Button, css, TextField, Theme, Box } from "@mui/material";
import { ChangeEventHandler, MouseEventHandler } from "react";

const button = (theme: Theme) => css`
  margin-left: ${theme.spacing(2)};
  vertical-align: bottom;
`;

export type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onAdd: MouseEventHandler<HTMLButtonElement>;
};

export const TodoItemCreator = ({ value, onChange, onAdd }: Props) => (
  <Box>
    <TextField variant="standard" label="todo content" value={value} onChange={onChange} />
    <Button variant="contained" css={button} onClick={onAdd}>
      Add
    </Button>
  </Box>
);
