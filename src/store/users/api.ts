// sagas/userSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTER_REQUEST,
    FETCH_USERS_REQUEST,
    authLoginError,
    authLoginSuccess,
    authRegisterError,
    authRegisterSuccess,
    fetchUsersError,
    fetchUsersSuccess, AUTH_LOGIN_REQUEST
} from './actions.ts';
import baseRequest, {ApiResponse} from '../../utils/baseApi/index.ts';
import {User,RegisterResponse,RegisterFormValues,LoginResponse,LoginFormValues} from "./types.ts";


function* fetchUsers(action: { type: string, payload: string }) {
    console.log('fetch users')
    try {
        const response:ApiResponse<User[]> = yield call(baseRequest<User[]>,'GET',`users/search?username=${action.payload}`);
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
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

