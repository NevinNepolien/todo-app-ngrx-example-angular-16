// src/app/state/todo.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { ToDo } from './todo.model';
import * as ToDoActions from './todo.actions';

export interface ToDoState {
  todos: ToDo[];
}

export const initialState: ToDoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(ToDoActions.addTodo, (state, { id, text, completed }) => ({
    ...state,
    todos: [...state.todos, { id, text, completed }],
  })),
  on(ToDoActions.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(ToDoActions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  }))
);
