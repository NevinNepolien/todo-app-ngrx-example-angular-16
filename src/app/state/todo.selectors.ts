  
import { createSelector } from '@ngrx/store';
import { ToDoState } from './todo.reducer';

export const selectTodoState = (state: { todo: ToDoState }) => state.todo;

export const selectTodos = createSelector(selectTodoState, (state) => state.todos);
