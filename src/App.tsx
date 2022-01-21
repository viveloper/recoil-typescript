import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
