import { Button, TextField, styled, Box } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../states";

const StyledButton = styled(Button)`
  margin-left: ${props => props.theme.spacing(2)};
  vertical-align: bottom;
`;

export const TodoItemCreator = () => {
  const [id, setId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    const newTodo = {
      id,
      text: inputValue,
      isComplete: false,
    };

    setTodoList(oldTodoList => [...oldTodoList, newTodo]);
    setInputValue("");
    setId(id + 1);
  };

  const updateText = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <Box>
      <TextField variant="standard" label="todo content" value={inputValue} onChange={updateText} />
      <StyledButton variant="contained" onClick={addItem}>
        Add
      </StyledButton>
    </Box>
  );
};
