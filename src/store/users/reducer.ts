import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_ERROR,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
} from './actions.ts'
import {RegisterResponse, User} from './types.ts'
import {Action} from "redux";

interface UserState {
    users: User[];
    currentUser: User | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null
};


interface FetchUserRequestAction extends Action<typeof FETCH_USERS_REQUEST> {
}

interface FetchUsersSuccessAction extends Action<typeof FETCH_USERS_SUCCESS> {
    payload: User[];
}

interface FetchUserErrorAction extends Action<typeof FETCH_USERS_ERROR> {
    payload: string;
}

interface AuthRegisterRequestAction extends Action<typeof AUTH_REGISTER_REQUEST> {
}

interface AuthRegisterSuccessAction extends Action<typeof AUTH_REGISTER_SUCCESS> {
    payload: RegisterResponse;
}

interface AuthRegisterErrorAction extends Action<typeof AUTH_REGISTER_ERROR> {
    payload: string;
}

interface AuthLoginRequestAction extends Action<typeof AUTH_LOGIN_REQUEST> {
}

interface AuthLoginSuccessAction extends Action<typeof AUTH_LOGIN_SUCCESS> {
    payload: User;
}

interface AuthLoginErrorAction extends Action<typeof AUTH_LOGIN_ERROR> {
    payload: string;
}

type UserActionTypes =
    | FetchUserRequestAction
    | FetchUsersSuccessAction
    | FetchUserErrorAction
    | AuthRegisterRequestAction
    | AuthRegisterSuccessAction
    | AuthRegisterErrorAction
    | AuthLoginRequestAction
    | AuthLoginSuccessAction
    | AuthLoginErrorAction;

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            console.log('reducer')
            console.log(action)
            return {...state, isLoading: true, error: null};
        case FETCH_USERS_SUCCESS:
            console.log(action)
            return {...state, isLoading: false, users: action.payload};
        case FETCH_USERS_ERROR:
            return {...state, isLoading: false, error: action.payload};

        case AUTH_REGISTER_REQUEST:
            return {...state, isLoading: true, error: null};
        case AUTH_LOGIN_REQUEST:
            return {...state, isLoading: true, error: null};
        case AUTH_REGISTER_SUCCESS: {
            console.log(action.payload)
            const accessToken = action.payload.tokens.accessToken
            localStorage.setItem('accessToken', accessToken);
            return {...state, isLoading: false, error: null, currentUser:action.payload.user};
        }
        case AUTH_LOGIN_SUCCESS:
            console.log(action)
            return {...state, isLoading: false, currentUser: action.payload};
        case AUTH_REGISTER_ERROR:
        case AUTH_LOGIN_ERROR:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
};

export default userReducer;
