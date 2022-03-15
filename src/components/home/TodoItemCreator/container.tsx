import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../states";
import { Props, TodoItemCreator } from "./presenter";

export const TodoItemCreatorContainer = () => {
  const [id, setId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem: Props["onAdd"] = () => {
    const newTodo = {
      id,
      text: inputValue,
      isComplete: false,
    };

    setTodoList(oldTodoList => [...oldTodoList, newTodo]);
    setInputValue("");
    setId(id + 1);
  };

  const updateText: Props["onChange"] = ({ currentTarget: { value } }) => {
    setInputValue(value);
  };

  return <TodoItemCreator value={inputValue} onChange={updateText} onAdd={addItem} />;
};
