import { unsafeUpdateAt, unsafeDeleteAt } from "fp-ts/Array";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "../states";
import { Props } from "./presenter";

export type Params = {
  item: ITodoItem;
};

export const useTodoItem = ({ item }: Params) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex(listItem => listItem === item);

  const updateText: Props["onTextChange"] = ({ currentTarget: { value } }) => {
    const newList = unsafeUpdateAt(index, { ...item, text: value }, todoList);
    setTodoList(newList);
  };

  const updateCompletion: Props["onCheckChange"] = ({ currentTarget: { checked } }) => {
    const newList = unsafeUpdateAt(index, { ...item, isComplete: checked }, todoList);
    setTodoList(newList);
  };

  const deleteItem: Props["onDeleteClick"] = () => {
    const newList = unsafeDeleteAt(index, todoList);
    setTodoList(newList);
  };

  return { updateText, updateCompletion, deleteItem };
};
