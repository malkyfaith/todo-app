import { Action } from '@ngrx/store';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';
export const TOGGLE_TUTORIAL = '[TUTORIAL] Toggle';

export class AddTodo implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload: any) { }
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: number) { }
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TUTORIAL;
    constructor(public payload: number) { }
}

export type Actions = AddTodo | RemoveTodo | ToggleTodo;
