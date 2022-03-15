import DeleteIcon from "@mui/icons-material/Delete";
import { ListItem, IconButton, TextField, Checkbox, css, Theme } from "@mui/material";
import { ChangeEventHandler, MouseEventHandler } from "react";

import { ITodoItem } from "../states";

const li = (theme: Theme) => css`
  padding-left: 0;
  padding-right: 0;

  & .MuiFormControl-root {
    margin-right: ${theme.spacing(2)};
  }
`;

export type Props = Omit<ITodoItem, "id"> & {
  onTextChange: ChangeEventHandler<HTMLInputElement>;
  onCheckChange: ChangeEventHandler<HTMLInputElement>;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
};

export const TodoItem = ({
  text,
  isComplete,
  onTextChange,
  onCheckChange,
  onDeleteClick: onDelete,
}: Props) => (
  <ListItem dense css={li}>
    <TextField fullWidth variant="standard" value={text} onChange={onTextChange} />
    <Checkbox checked={isComplete} onChange={onCheckChange} />
    <IconButton edge="end" onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);
