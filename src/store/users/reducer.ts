import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR,
    AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_ERROR,
    AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR,
    FETCH_USER_BY_ID_REQUEST,FETCH_USER_BY_ID_ERROR,FETCH_USER_BY_ID_SUCCESS
} from './actions.ts';
import { RegisterResponse, User } from './types.ts';
import { Action } from 'redux';

interface UserState {
    users: User[];
    currentUser: User | null;
    selectedUser: User|null,
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    selectedUser:null,
    isLoading: false,
    error: null
};

type UserActionTypes =
    | Action<typeof FETCH_USERS_REQUEST | typeof AUTH_REGISTER_REQUEST | typeof AUTH_LOGIN_REQUEST | typeof FETCH_USER_BY_ID_REQUEST >
    | { type: typeof FETCH_USERS_SUCCESS, payload: User[] }
    | { type: typeof FETCH_USERS_ERROR | typeof AUTH_REGISTER_ERROR | typeof  AUTH_LOGIN_ERROR| typeof FETCH_USER_BY_ID_ERROR, payload: string }
    | { type: typeof AUTH_REGISTER_SUCCESS, payload: RegisterResponse }
    | { type: typeof AUTH_LOGIN_SUCCESS, payload: User }
    | {type: typeof FETCH_USER_BY_ID_SUCCESS, payload: User}


const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
        case AUTH_REGISTER_REQUEST:
        case FETCH_USER_BY_ID_REQUEST:
        case AUTH_LOGIN_REQUEST:
            return { ...state, isLoading: true, error: null };

        case FETCH_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };

        case AUTH_REGISTER_SUCCESS:
            localStorage.setItem('accessToken', action.payload.tokens.accessToken);
            return { ...state, isLoading: false, currentUser: action.payload.user, error: null };

        case AUTH_LOGIN_SUCCESS:
            return { ...state, isLoading: false, currentUser: action.payload };

        case FETCH_USERS_ERROR:
        case AUTH_REGISTER_ERROR:
        case AUTH_LOGIN_ERROR:
            return { ...state, isLoading: false, error: action.payload };

        case FETCH_USER_BY_ID_SUCCESS:
            return {...state, isLoading:false, selectedUser:action.payload}
        default:
            return state;
    }
};

export default userReducer;
