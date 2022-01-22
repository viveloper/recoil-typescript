import { rest } from 'msw';
import { Todo } from '../components/TodoList/types';

const todoList: Todo[] = [
  {
    id: 1,
    text: 'react',
    isComplete: false,
  },
  {
    id: 2,
    text: 'recoil',
    isComplete: false,
  },
  {
    id: 3,
    text: 'react-query',
    isComplete: false,
  },
];

let nextTodoId = 4;

export const handlers = [
  rest.get('/todo-list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...todoList]));
  }),

  rest.post<Todo>('/todo-list', (req, res, ctx) => {
    const newTodo = req.body;
    todoList.push(newTodo);
    return res(ctx.status(200), ctx.json({ ...newTodo }));
  }),
];
