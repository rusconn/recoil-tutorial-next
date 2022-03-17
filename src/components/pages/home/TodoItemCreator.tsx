import { Button, css, TextField, Theme, Box } from "@mui/material";
import { ChangeEventHandler, memo, MouseEventHandler, useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "./states";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onAdd: MouseEventHandler<HTMLButtonElement>;
};

const button = (theme: Theme) => css`
  margin-left: ${theme.spacing(2)};
  vertical-align: bottom;
`;

const StyledComponent = ({ value, onChange, onAdd }: Props) => (
  <Box>
    <TextField variant="standard" label="todo content" value={value} onChange={onChange} />
    <Button variant="contained" css={button} onClick={onAdd}>
      Add
    </Button>
  </Box>
);

export const Component = memo(StyledComponent);

const Container = () => {
  const [id, setId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem: Props["onAdd"] = useCallback(() => {
    const newTodo = {
      id,
      text: inputValue,
      isComplete: false,
    };

    setTodoList(oldTodoList => [...oldTodoList, newTodo]);
    setInputValue("");
    setId(id + 1);
  }, [id, inputValue, setTodoList]);

  const updateText: Props["onChange"] = useCallback(({ currentTarget: { value } }) => {
    setInputValue(value);
  }, []);

  return <Component value={inputValue} onChange={updateText} onAdd={addItem} />;
};

export default Container;
