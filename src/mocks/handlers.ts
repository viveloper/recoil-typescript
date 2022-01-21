import { rest } from 'msw';
import { Todo } from '../components/TodoList/state';

export const handlers = [
  rest.post('/todo-list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
  rest.get('/todo-list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),
];
