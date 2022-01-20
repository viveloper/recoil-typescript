import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './state';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
