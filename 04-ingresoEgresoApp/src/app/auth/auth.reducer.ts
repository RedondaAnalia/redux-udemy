

import * as fromAuth from './auth.actions';
import { User } from './user.model';
import { SET_USER } from './auth.actions';

export interface AuthState {
    user: User;
}

const INIT_STATE: AuthState = {
    user: null
};

export function authReducer (state= INIT_STATE, action: fromAuth.acciones): AuthState {

    switch (action.type) {
        case fromAuth.SET_USER: return { user: { ... action.user}};
        default: return state;
    }
}