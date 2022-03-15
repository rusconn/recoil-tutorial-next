import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../states";

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
    <div>
      <input type="text" value={inputValue} onChange={updateText} />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </div>
  );
};
