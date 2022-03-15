import { unsafeDeleteAt, unsafeUpdateAt } from "fp-ts/Array";
import { useRecoilState } from "recoil";

import { ITodoItem, todoListState } from "../states";
import { TodoItem, Props as ComponentProps } from "./presenter";

type Props = {
  item: ITodoItem;
};

export const TodoItemContainer = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex(listItem => listItem === item);

  const updateText: ComponentProps["onTextChange"] = ({ currentTarget: { value } }) => {
    const newList = unsafeUpdateAt(index, { ...item, text: value }, todoList);
    setTodoList(newList);
  };

  const updateCompletion: ComponentProps["onCheckChange"] = ({ currentTarget: { checked } }) => {
    const newList = unsafeUpdateAt(index, { ...item, isComplete: checked }, todoList);
    setTodoList(newList);
  };

  const deleteItem: ComponentProps["onDeleteClick"] = () => {
    const newList = unsafeDeleteAt(index, todoList);
    setTodoList(newList);
  };

  return (
    <TodoItem
      text={item.text}
      isComplete={item.isComplete}
      onTextChange={updateText}
      onCheckChange={updateCompletion}
      onDeleteClick={deleteItem}
    />
  );
};
