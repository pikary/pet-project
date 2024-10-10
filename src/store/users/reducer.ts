import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from './actions.ts'
import {User} from './types.ts'
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


interface FetchUserRequestAction extends Action<typeof FETCH_USERS_REQUEST> {}
interface FetchUsersSuccessAction extends Action<typeof FETCH_USERS_SUCCESS> {
    payload: User[];
}
interface FetchUserErrorAction extends Action<typeof FETCH_USERS_ERROR> {
    payload: string;
}
type UserActionTypes =
    | FetchUserRequestAction
    | FetchUsersSuccessAction
    | FetchUserErrorAction;



const userReducer = (state = initialState, action:UserActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            console.log('reducer')
            console.log(action)
            return { ...state, isLoading: true, error: null };
        case FETCH_USERS_SUCCESS:
            console.log(action)
            return { ...state, isLoading: false, users: action.payload };
        case FETCH_USERS_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
