import DeleteIcon from "@mui/icons-material/Delete";
import { ListItem, IconButton, TextField, Checkbox, styled } from "@mui/material";
import { unsafeDeleteAt, unsafeUpdateAt } from "fp-ts/Array";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "../states";

const StyledListItem = styled(ListItem)`
  padding-left: 0;
  padding-right: 0;

  & .MuiFormControl-root {
    margin-right: ${props => props.theme.spacing(2)};
  }
`;

type Props = {
  item: ITodoItem;
};

export const TodoItem = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex(listItem => listItem === item);

  const updateText = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    const newList = unsafeUpdateAt(index, { ...item, text: value }, todoList);
    setTodoList(newList);
  };

  const updateCompletion = ({ currentTarget: { checked } }: ChangeEvent<HTMLInputElement>) => {
    const newList = unsafeUpdateAt(index, { ...item, isComplete: checked }, todoList);
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = unsafeDeleteAt(index, todoList);
    setTodoList(newList);
  };

  return (
    <StyledListItem dense>
      <TextField fullWidth variant="standard" value={item.text} onChange={updateText} />
      <Checkbox checked={item.isComplete} onChange={updateCompletion} />
      <IconButton edge="end" onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
    </StyledListItem>
  );
};
