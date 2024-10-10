import { combineReducers } from 'redux';
import userReducer from './users/reducer.ts'
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {watchFetchUsers} from "./users/api.ts";

const rootReducer = combineReducers({
    user: userReducer,
});
const sagaMiddleware = createSagaMiddleware({

})
const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(watchFetchUsers)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;