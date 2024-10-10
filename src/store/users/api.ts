// sagas/userSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersError,fetchUsersRequest,fetchUsersSuccess } from '../users/actions.ts';
import baseRequest, {ApiResponse} from '../../utils/baseApi/index.ts';
import {FETCH_USERS_REQUEST} from "../users/actions.ts";
import {User} from "./types.ts";


function* fetchUsers(action: { type: string, payload: string }) {
    console.log('fetch users')
    try {
        const response:ApiResponse<User[]> = yield call(baseRequest<User[]>,'GET',`users?username=${action.payload}`);
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersError((error as Error).message));
    }
}

export function* watchFetchUsers() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}
