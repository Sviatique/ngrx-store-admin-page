import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const TOGGLE_STATUS = '[User] Toggle Status';

export class ToggleStatusAction implements Action {
    readonly type = TOGGLE_STATUS;

    constructor(public payload: number) {}
}

export type Actions = ToggleStatusAction;
