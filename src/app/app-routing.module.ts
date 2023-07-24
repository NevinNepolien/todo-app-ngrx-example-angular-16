import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoEffects } from './state/todo.effects';
import { ToDoListComponent } from './todo-list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: ToDoListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
