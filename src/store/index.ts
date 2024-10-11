import { combineReducers } from 'redux';
import userReducer from './users/reducer.ts'
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga.ts'
const rootReducer = combineReducers({
    user: userReducer,
});
const sagaMiddleware = createSagaMiddleware({

})
const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;