import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import * as fromUsers from './users';

export interface State {
  users: fromUsers.State;
}

export const reducers = {
  users: fromUsers.reducer,
};

export const getUsers = (state: State) => {
    return fromUsers.getEntities(state.users);
};
