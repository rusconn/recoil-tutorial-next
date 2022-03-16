import { unsafeUpdateAt, unsafeDeleteAt } from "fp-ts/Array";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "../states";
import { Props } from "./presenter";

export type Params = {
  item: ITodoItem;
};

export const useTodoItem = ({ item }: Params) => {
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

  return { updateText, updateCompletion, deleteItem };
};
