import {User, RegisterResponse} from "./types.ts";
import {RegisterFormValues} from "../../pages/Register/helpers.ts";

// actions/userActions.ts
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const fetchUsersRequest = (query: string) => ({type: FETCH_USERS_REQUEST, payload: query});
export const fetchUsersSuccess = (users: User[]) => ({type: FETCH_USERS_SUCCESS, payload: users});
export const fetchUsersError = (error: string) => ({type: FETCH_USERS_ERROR, payload: error});


//register
export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';
export const authRegisterRequest = (data: RegisterFormValues) => ({type: AUTH_REGISTER_REQUEST, payload: data});
export const authRegisterSuccess = (user: RegisterResponse) => ({type: AUTH_REGISTER_SUCCESS, payload: user});
export const authRegisterError = (error: string) => ({type: AUTH_REGISTER_ERROR, payload: error});


// Login
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const authLoginRequest = (data: { email: string; password: string }) => ({type: AUTH_LOGIN_REQUEST, payload: data});
export const authLoginSuccess = (user: RegisterResponse) => ({type: AUTH_LOGIN_SUCCESS, payload: user});
export const authLoginError = (error: string) => ({type: AUTH_LOGIN_ERROR, payload: error});


// Get User
export const FETCH_USER_BY_ID_REQUEST = 'FETCH_USER_BY_ID_REQUEST'
export const FETCH_USER_BY_ID_ERROR = 'FETCH_USER_BY_ID_ERROR'
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS'
export const fetchUserByIdRequest = (data: string) => ({type: FETCH_USER_BY_ID_REQUEST, payload: data});
export const fetchUserByIdSuccess = (user:User) => ({type: FETCH_USER_BY_ID_SUCCESS, payload: user});
export const fetchUserByIdError = (error: string) => ({type: FETCH_USER_BY_ID_ERROR, payload: error});




