import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredTodoListState, todoListState } from './state';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import { getTodoList } from './api';

function TodoList() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const { data: todoList } = useQuery('todoList', getTodoList);

  useEffect(() => {
    if (todoList) {
      setTodoList(todoList);
    }
  }, [todoList]);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
