import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './state';

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
