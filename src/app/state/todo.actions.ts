// src/app/state/todo.actions.ts

import { createAction, props } from '@ngrx/store';
import { ToDo } from './todo.model';

export const addTodo = createAction('[ToDo] Add Todo', props<ToDo>());
export const deleteTodo = createAction('[ToDo] Delete Todo', props<{ id: string }>());
export const toggleTodo = createAction('[ToDo] Toggle Todo', props<{ id: string }>());
export const addTodoSuccess = createAction('[ToDo] Add Todo Success', props<ToDo>());
