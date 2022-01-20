import React from 'react';
import { useRecoilState } from 'recoil';
import { Todo, todoListState } from './state';

interface Props {
  item: Todo;
}

function TodoItem({ item }: Props) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setTodoList((todoList) =>
      todoList.map((listItem) =>
        listItem === item ? { ...listItem, text: value } : listItem
      )
    );
  };

  const toggleItemCompletion: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setTodoList((todoList) =>
      todoList.map((listItem) =>
        listItem === item
          ? { ...listItem, isComplete: !listItem.isComplete }
          : listItem
      )
    );
  };

  const deleteItem: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTodoList((todoList) => todoList.filter((listItem) => listItem !== item));
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoItem;
