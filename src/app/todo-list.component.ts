// src/app/todo-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToDo } from './state/todo.model';
import { addTodo, deleteTodo, toggleTodo } from './state/todo.actions';
import { selectTodos } from './state/todo.selectors'; 

@Component({
  selector: 'app-todo-list',
  template: `

    <ul>
    
    <div>
      <p>Task List</p>
      <div *ngFor="let todo of todos">
      <div *ngIf="!todo.completed">
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="toggleTodoCompleted(todo.id)"
        />
        <span [ngClass]="{ completed: todo.completed }">{{ todo.text }}</span>
        <button (click)="deleteTodo(todo.id)">Delete</button>
        </div>
      </div>
    </div>

      <div *ngIf="getCountOfCompletedItems()>0">
         <p>Completed Task List</p>
          <div *ngFor="let todo of todos"> 
             <div *ngIf="todo.completed">
              <input type="checkbox" [checked]="todo.completed"   (change)="toggleTodoCompleted(todo.id)"  />
                <span [ngClass]="{ completed: todo.completed }">{{ todo.text }}</span>
                <button (click)="deleteTodo(todo.id)">Delete</button>
             </div>
          </div>
      </div>

    </ul>

    <!-- <form (ngSubmit)="addTodoItem()"> -->
  <input type="text" [(ngModel)]="newTodoText" placeholder="Enter a new To Do item">
  <button (click)="addTodoItem()" type="submit">Add</button>
<!-- </form>  -->

  `,
})
export class ToDoListComponent implements OnInit {
    todos: ToDo[] = [];
    newTodoText = '';
    constructor(private store: Store<{ todo: { todos: ToDo[] } }>) {} 
   
    ngOnInit() {
      // Use a selector to retrieve the ToDo items from the state
      this.store.pipe(select(selectTodos)).subscribe((todos) => {
        this.todos = todos;
      });
    }
   
    addNewTodo(todo: ToDo) {
      this.store.dispatch(addTodo(todo));
    }
  
    deleteTodo(id: string) {
      this.store.dispatch(deleteTodo({ id }));
    }
  
    toggleTodoCompleted(id: string) {
      this.store.dispatch(toggleTodo({ id }));
    }
    addTodoItem() {
        const trimmedText = this.newTodoText.trim();
        if (trimmedText !== '') {
          const newTodo: ToDo = {
            id: String(this.todos.length+1), // Implement this function to generate a unique ID
            text: trimmedText,
            completed: false,
          };
          this.addNewTodo(newTodo);
          this.newTodoText = '';
        }
      }
    
      private generateRandomId(): string { 
        return 'unique-id';  
      }


      getCountOfCompletedItems(): number {
        return Object.values(this.todos).reduce((count, item) => {
          return count + (item.completed ? 1 : 0);
        }, 0);
      }
  }