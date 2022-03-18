import DeleteIcon from "@mui/icons-material/Delete";
import { ListItem, IconButton, TextField, Checkbox, styled } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { unsafeDeleteAt, unsafeUpdateAt } from "fp-ts/Array";
import { useCallback, memo, ChangeEventHandler, MouseEventHandler } from "react";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "./states";

type ContainerProps = {
  item: ITodoItem;
};

type Props = Pick<CommonProps, "className"> &
  Omit<ITodoItem, "id"> & {
    onTextChange: ChangeEventHandler<HTMLInputElement>;
    onCheckChange: ChangeEventHandler<HTMLInputElement>;
    onDeleteClick: MouseEventHandler<HTMLButtonElement>;
  };

const RawComponent = ({
  className,
  text,
  isComplete,
  onTextChange,
  onCheckChange,
  onDeleteClick,
}: Props) => (
  <ListItem dense className={className}>
    <TextField fullWidth variant="standard" value={text} onChange={onTextChange} />
    <Checkbox checked={isComplete} onChange={onCheckChange} />
    <IconButton edge="end" onClick={onDeleteClick}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

const StyledComponent = styled(RawComponent)`
  padding-left: 0;
  padding-right: 0;

  & .MuiFormControl-root {
    margin-right: ${props => props.theme.spacing(2)};
  }
`;

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
