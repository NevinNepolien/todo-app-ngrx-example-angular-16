// src/app/state/todo.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, delay } from 'rxjs/operators';
import { ToDo } from './todo.model';
import { addTodo, addTodoSuccess } from './todo.actions';
import { of } from 'rxjs';

@Injectable()
export class ToDoEffects {
  constructor(private actions$: Actions) {}

  // Example effect for handling side effects when a ToDo is added
  addTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      mergeMap((action) => {
        // Perform side effects here, e.g., save the ToDo item to the server
        // This is just a simulation using a delay to mimic an API call

        const { id, text, completed } = action; // Destructure properties from the action payload

        return this.simulateSaveToDoToServer(id, text, completed).pipe(
          map(() => addTodoSuccess({ id, text, completed }))
        );
      })
    )
  );

  // Simulate saving ToDo item to the server (replace this with actual API call)
  private simulateSaveToDoToServer(id: string, text: string, completed: boolean) {
    // Simulate an API call with a delay
    return of(true).pipe(delay(1000));
  }
}
