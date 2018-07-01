import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in constructor', () => {
    const value = {
      id: 1,
      title: 'Test Title',
      complete: false
    };
    const todo = new Todo(value);
    expect(todo).toBeDefined();
    expect(todo.title).toEqual('Test Title');
  });
});
