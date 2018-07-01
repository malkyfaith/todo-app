import * as TutorialActions from './actions';

export const todos = (state = [], action: TutorialActions.Actions) => {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            return state.filter(todo => todo.id !== action.payload['id']);
        case TutorialActions.TOGGLE_TUTORIAL:
            return state.map(todo => {
                if (todo.id === action.payload['id']) {
                    return Object.assign({}, todo, {complete: !todo.complete});
                }
                return todo;
            });
        default:
            return state;
    }
};
