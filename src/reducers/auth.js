import {authApi} from "../api/baseApi";
import {initializeAppToTrue} from "./app-reducer";
import {stopSubmit} from "redux-form";

const ADD_AUTH_DATA = 'ADD_AUTH_DATA';
const DELETE_AUTH_DATA = 'DELETE_AUTH_DATA';


const initialState = {
    id: null,
    login: null,
    email: null,
    authorized: false
};

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case ADD_AUTH_DATA:
            return {
                ...state,
                ...payload,
                authorized: true
            }
        case DELETE_AUTH_DATA:
            return {
                id: null,
                login: null,
                email: null,
                authorized: false
            }
        default:
            return state
    }
}

export const addAuthData = () => async (dispatch) => {
    const res = await authApi.userAuth();
    if (res.data.resultCode === 0) {
        dispatch({type: 'ADD_AUTH_DATA', payload: res.data.data});
        dispatch(initializeAppToTrue())
    } else {
        dispatch(initializeAppToTrue())
    }
}

export const logout = () => async (dispatch) => {
    const res = await authApi.logout();
    if (res.data.resultCode === 0) {
        dispatch({type: 'DELETE_AUTH_DATA'});
    }
}

export const login = ({email, password, rememberMe}) => async (dispatch) => {
    const res = await authApi.login(email, password, rememberMe);
    if (res.data.resultCode === 0) {
        dispatch(addAuthData());
    } else {
        dispatch(stopSubmit("login", {_error: res.data.messages}));
    }
}