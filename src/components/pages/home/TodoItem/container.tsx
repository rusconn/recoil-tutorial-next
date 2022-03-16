import { Params, useTodoItem } from "./hook";
import { TodoItem } from "./presenter";

type Props = Params;

export const TodoItemContainer = ({ item }: Props) => {
  const { updateText, updateCompletion, deleteItem } = useTodoItem({ item });

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
