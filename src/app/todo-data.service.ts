import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Store } from '@ngrx/store';
import * as TutorialActions from './redux/actions';

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
      type: TutorialActions.ADD_TUTORIAL,
      payload: {
        id: ++this.lastId,
        title: todo.title,
        complete: todo.complete
      }
    });
    todo.title = '';
  }

  deleteTodoById(id: number) {
    this._store.dispatch({
      type:  TutorialActions.REMOVE_TUTORIAL,
      payload: {
        id: id
      }
    });
  }

  toggleTodoComplete(id: number) {
    this._store.dispatch({
      type:  TutorialActions.TOGGLE_TUTORIAL,
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
