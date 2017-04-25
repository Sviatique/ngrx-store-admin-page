import { User } from '../models/user';
import * as userActions from '../actions/user';
import { users } from '../data/users';

export interface State {
    ids: Array<number>;
    entities: { [id: number]: User};
}

export const initialState: State = {
    ids: users.map(user => user.id),
    entities: users.reduce((entities, user) => {
        entities[user.id] = user;
        return entities;
    }, {})
};

export function reducer(state = initialState, action: userActions.Actions) {
    switch(action.type) {
        case userActions.TOGGLE_STATUS: {
            const userId = action.payload;
            const newUser = Object.assign({}, state.entities[userId]);
            newUser.isActive = !newUser.isActive;
            const newEntities = { ...state.entities, [userId]: newUser};

            return {
                ...state,
                entities: newEntities
            };
        };
        default: {
            return state;
        };
    }
}


export const getEntities = (state: State) => state.ids.map(id => state.entities[id]);
