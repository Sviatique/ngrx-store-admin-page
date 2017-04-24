import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromUsers from './users';

export interface State {
  users: fromUsers.State;
}

const reducers = {
  users: fromUsers.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getUsersState = (state: State) => state.users;

export const getUserEntities = createSelector(getUsersState, fromUsers.getEntities);
