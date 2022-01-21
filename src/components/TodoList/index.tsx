import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './state';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  const { data } = useQuery('todoList', async () => {
    const res = await axios.get('/todo-list');
    return res.data;
  });

  console.log(data);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
