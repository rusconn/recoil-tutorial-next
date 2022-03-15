import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../states";
import { Props } from "./presenter";

export const useTodoItemCreator = () => {
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

  return { inputValue, updateText, addItem };
};
