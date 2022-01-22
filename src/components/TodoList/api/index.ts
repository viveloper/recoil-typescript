import axios from 'axios';
import { Todo } from '../types';

export async function getTodoList() {
  const res = await axios.get<Todo[]>('/todo-list');
  return res.data;
}

export async function postTodo(text: string) {
  const res = await axios.post<Todo>('todo-list', { text });
  return res.data;
}
