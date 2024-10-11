import {all} from 'redux-saga/effects';
import {watchRegister, watchFetchUsers, watchLogin} from "./users/api.ts";


function* rootSaga() {
    yield all([
        watchFetchUsers(),
        watchRegister(),
        watchLogin()
    ]);
}

export default rootSaga