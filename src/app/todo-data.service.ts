import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Store } from '@ngrx/store';

@Injectable()
export class TodoDataService {

  todos: Todo[] = [];

  lastId = 0;

  constructor(private _store: Store<any>) {
    _store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(todo: Todo): void {
    this._store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: ++this.lastId,
        title: todo.title,
        complete: todo.complete
      }
    });
  }

  deleteTodoById(id: number) {
    this._store.dispatch({
      type: 'REMOVE_TODO',
      payload: {
        id: id
      }
    });
  }

  toggleTodoComplete(id: number) {
    this._store.dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: {
        id: id
      }
    });
  }

  public getCompleteTodos(): Todo[] {
    return this.todos.filter(todo => todo.complete === true);
  }

  public getIncompleteTodos(): Todo[] {
    return this.todos.filter(todo => todo.complete === false);
  }

}
