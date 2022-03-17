import DeleteIcon from "@mui/icons-material/Delete";
import { ListItem, IconButton, TextField, Checkbox, css, Theme } from "@mui/material";
import { unsafeDeleteAt, unsafeUpdateAt } from "fp-ts/Array";
import { useCallback, memo, ChangeEventHandler, MouseEventHandler } from "react";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "./states";

type ContainerProps = {
  item: ITodoItem;
};

type Props = Omit<ITodoItem, "id"> & {
  onTextChange: ChangeEventHandler<HTMLInputElement>;
  onCheckChange: ChangeEventHandler<HTMLInputElement>;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
};

const li = (theme: Theme) => css`
  padding-left: 0;
  padding-right: 0;

  & .MuiFormControl-root {
    margin-right: ${theme.spacing(2)};
  }
`;

const StyledComponent = ({
  text,
  isComplete,
  onTextChange,
  onCheckChange,
  onDeleteClick,
}: Props) => (
  <ListItem dense css={li}>
    <TextField fullWidth variant="standard" value={text} onChange={onTextChange} />
    <Checkbox checked={isComplete} onChange={onCheckChange} />
    <IconButton edge="end" onClick={onDeleteClick}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

export const Component = memo(StyledComponent);

const Container = ({ item }: ContainerProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex(listItem => listItem === item);

  const updateText: Props["onTextChange"] = useCallback(
    ({ currentTarget: { value } }) => {
      const newList = unsafeUpdateAt(index, { ...item, text: value }, todoList);
      setTodoList(newList);
    },
    [index, item, todoList, setTodoList]
  );

  const updateCompletion: Props["onCheckChange"] = useCallback(
    ({ currentTarget: { checked } }) => {
      const newList = unsafeUpdateAt(index, { ...item, isComplete: checked }, todoList);
      setTodoList(newList);
    },
    [index, item, todoList, setTodoList]
  );

  const deleteItem: Props["onDeleteClick"] = useCallback(() => {
    const newList = unsafeDeleteAt(index, todoList);
    setTodoList(newList);
  }, [index, todoList, setTodoList]);

  return (
    <Component
      text={item.text}
      isComplete={item.isComplete}
      onTextChange={updateText}
      onCheckChange={updateCompletion}
      onDeleteClick={deleteItem}
    />
  );
};

export default Container;
