import { useTodoItemCreator } from "./hook";
import { TodoItemCreator } from "./presenter";

export const TodoItemCreatorContainer = () => {
  const { inputValue, updateText, addItem } = useTodoItemCreator();

  return <TodoItemCreator value={inputValue} onChange={updateText} onAdd={addItem} />;
};
