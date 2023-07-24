import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './state/todo.reducer';
import { ToDoEffects } from './state/todo.effects';
import { ToDoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ todo: todoReducer }),
    EffectsModule.forRoot([ToDoEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
