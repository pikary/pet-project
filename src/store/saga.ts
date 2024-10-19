import {all} from 'redux-saga/effects';
import {watchRegister, watchFetchUsers, watchLogin, watchFetchUserById} from "./users/api.ts";


function* rootSaga() {
    yield all([
        watchFetchUsers(),
        watchRegister(),
        watchLogin(),
        watchFetchUserById()
    ]);
}

export default rootSaga