import { User } from '../models/user';
import * as userActions from '../actions/user';
import { createSelector } from 'reselect';

export interface State {
    ids: Array<number>;
    entities: { [id: number]: User};
}

export const initialState: State = {
    ids: [],
    entities: {}
};

export function reducer(state = initialState, action: userActions.Actions) {
    switch(action.type) {
        case userActions.TOGGLE_STATUS: {
            const user = action.payload;
            const newUser = state.entities[user.id];
            console.log(state);
            // return Object.assign({}, state.entities.find());
        };
        default: {
            return state;
        };
    }
}


export const getEntities = (state: State) => state.entities;
