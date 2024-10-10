import {User} from "./types.ts";

// actions/userActions.ts
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const fetchUsersRequest = (query:string) => ({ type: FETCH_USERS_REQUEST,payload:query });
export const fetchUsersSuccess = (user: User[]) => ({ type: FETCH_USERS_SUCCESS, payload: user });
export const fetchUsersError = (error: string) => ({ type: FETCH_USERS_ERROR, payload: error });
