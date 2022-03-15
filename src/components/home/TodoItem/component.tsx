import { unsafeDeleteAt, unsafeUpdateAt } from "fp-ts/Array";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "../states";

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
    <li>
      <input type="text" value={item.text} onChange={updateText} />
      <input type="checkbox" checked={item.isComplete} onChange={updateCompletion} />
      <button type="button" onClick={deleteItem}>
        X
      </button>
    </li>
  );
};
