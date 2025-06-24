import './App.scss';
import React from 'react';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

// Enriquecendo os todos com o usuário correspondente
export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

// App principal com uso de componentes
export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    {/* Substitui os <article> fixos por componente reutilizável */}
    <TodoList todos={todos} />
  </div>
);
