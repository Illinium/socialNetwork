import {profilesApi} from "../api/baseApi";

const GET_USER_PROFILE = 'GET_USER_PROFILE';
const LOADING_ON_CHANGE = 'LOADING_ON_CHANGE';
const UPDATE_STATUS = 'UPDATE_STATUS';
const STATUS_EDIT_CREDENTIALS = 'STATUS_EDIT_CREDENTIALS';

const initialState = {
    posts: [
        {id: 1, name: "Angelina", comment: "test message"},
        {id: 2, name: "Aleksandr", comment: "test message"},
        {id: 3, name: "Elena", comment: "test message"},
        {id: 4, name: "Olga", comment: "test message"},
        {id: 5, name: "Andrew", comment: "test message"},
    ],
    currentUser: null,
    isLoading: false,
    statusText: null,
    statusEditCredentials: false
};

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                currentUser: payload
            }
        case LOADING_ON_CHANGE:
            return {
                ...state,
                isLoading: payload
            }
        case UPDATE_STATUS:
            return {
                ...state,
                statusText: payload
            }
        case STATUS_EDIT_CREDENTIALS:
            return {
                ...state,
                statusEditCredentials: payload
            }
        default:
            return state
    }
}

export const setStatusEditCredentials = (cred) => ({type: 'STATUS_EDIT_CREDENTIALS', payload: cred});

export const getCurrentUser = (userId) => async (dispatch) => {
    dispatch({type: 'LOADING_ON_CHANGE', payload: true});

    const res = await profilesApi.getProfile(userId);
    dispatch({type: 'GET_USER_PROFILE', payload: res.data});
    dispatch({type: 'LOADING_ON_CHANGE', payload: false});
};

export const getStatusText = (userId) => async (dispatch) => {
     const res = await profilesApi.getStatus(userId);
            dispatch({type: 'UPDATE_STATUS', payload: res.data})
}

export const updateStatusText = (status) => async (dispatch) => {
    const res = await profilesApi.updateStatus(status);
            if (res.data.resultCode === 0) {
                dispatch({type: 'UPDATE_STATUS', payload: status})
            }
}