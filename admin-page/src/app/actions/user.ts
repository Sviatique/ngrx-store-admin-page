import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const TOGGLE_STATUS = '[User] Toggle Status';

export class ToggleStatusAction implements Action {
    readonly type = TOGGLE_STATUS;
    public payload: User;

    constructor() {}
}

export type Actions = ToggleStatusAction;
