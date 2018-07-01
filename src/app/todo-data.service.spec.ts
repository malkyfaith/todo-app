import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get empty todos', inject([TodoDataService], (service: TodoDataService) => {
    expect(service.getTodos()).toEqual([]);
  }));

  it('should get some todos', inject([TodoDataService], (service: TodoDataService) => {
    const todo1 = new Todo({ title: 'Test 1', complete: false });
    const todo2 = new Todo({ title: 'Test 2', complete: true });
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getTodos()).toEqual([todo1, todo2]);
  }));

  it('should delete a todo', inject([TodoDataService], (service: TodoDataService) => {
    const todo1 = new Todo({ title: 'Test 1', complete: false });
    const todo2 = new Todo({ title: 'Test 2', complete: true });
    service.addTodo(todo1);
    service.addTodo(todo2);
    service.deleteTodoById(1);
    expect(service.getTodos()).toEqual([todo2]);
  }));

  it('should update a todo', inject([TodoDataService], (service: TodoDataService) => {
    const todo1 = new Todo({ title: 'Test 1', complete: false });
    const todo2 = new Todo({ title: 'Test 2', complete: true });
    service.addTodo(todo1);
    service.addTodo(todo2);
    service.updateTodoById(1, { title: 'Changed' });
    expect(service.getTodoById(1).title).toEqual('Changed');
  }));

  it('should toggle complete a todo', inject([TodoDataService], (service: TodoDataService) => {
    const todo1 = new Todo({ title: 'Test 1', complete: false });
    const todo2 = new Todo({ title: 'Test 2', complete: true });
    service.addTodo(todo1);
    service.addTodo(todo2);
    service.toggleTodoComplete(todo1);
    expect(service.getTodoById(1).complete).toBeTruthy();
  }));
});
