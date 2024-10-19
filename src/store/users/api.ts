// sagas/userSaga.ts
import { call, put, takeLatest,debounce } from 'redux-saga/effects';
import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTER_REQUEST,
    FETCH_USERS_REQUEST,
    authLoginError,
    authLoginSuccess,
    authRegisterError,
    authRegisterSuccess,
    fetchUsersError,
    fetchUsersSuccess,
    fetchUserByIdError,
    fetchUserByIdSuccess,
    fetchUserByIdRequest, FETCH_USER_BY_ID_ERROR, FETCH_USER_BY_ID_REQUEST
} from './actions.ts';
import baseRequest, {ApiResponse} from '../../utils/baseApi/index.ts';
import {User,RegisterResponse,RegisterFormValues,LoginResponse,LoginFormValues} from "./types.ts";



function *fetchUserById(action:{type:string, payload:string}) {
    //payload == id
    try {
        const response:ApiResponse<User> = yield call(baseRequest<User>, 'GET',`users/${action.payload}`)
        yield put(fetchUserByIdSuccess(response.data));
    }catch (e) {
        yield put(fetchUserByIdError((e as Error).message));
    }
}

function* fetchUsers(action: { type: string, payload: string }) {
    console.log('fetch users')
    try {
        const response:ApiResponse<User[]> = yield call(baseRequest<User[]>,'GET',`users/search?name=${action.payload}`);
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersError((error as Error).message));
    }
}




function* register(action:{type:string, payload:RegisterFormValues}){
    //regisration
    try{
        const response:ApiResponse<RegisterResponse> = yield call(baseRequest<RegisterResponse>, 'POST', 'auth/register', action.payload);
        console.log(response)
        yield put(authRegisterSuccess(response.data))
    }catch (error) {
        yield put(authRegisterError((error as Error).message));
    }
}

function* login(action:{type:string, payload:LoginFormValues}){
    try{
        const response:ApiResponse<LoginResponse> = yield call(baseRequest<LoginResponse>, 'POST', 'auth/login', action.payload);
        console.log(response)
        yield put(authLoginSuccess(response.data))
    }catch (error) {
        yield put(authLoginError((error as Error).message));
    }
}



export function* watchLogin() {
    yield takeLatest(AUTH_LOGIN_REQUEST, login);
}
export function *watchRegister(){
    yield takeLatest(AUTH_REGISTER_REQUEST, register);
}

export function* watchFetchUsers() {
    yield debounce(300, FETCH_USERS_REQUEST, fetchUsers); // Debounce the saga with 300ms delay
}
export function *watchFetchUserById(){
    yield takeLatest(FETCH_USER_BY_ID_REQUEST, fetchUserById);
}
