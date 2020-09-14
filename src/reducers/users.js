import {usersApi} from "../api/baseApi";

const GET_USERS = 'GET_USERS';
const PAGE_CHANGED = 'PAGE_CHANGED';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const ADD_DELETE_BTN_BLOCK = 'ADD_DELETE_BTN_BLOCK';

const initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    count: 100,
    isLoading: false,
    blockBtnById: []
};

export default function (state=  initialState, action) {
    const {type, payload} = action
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload.items,
                totalCount: payload.totalCount
            }
        case PAGE_CHANGED:
            return {
                ...state,
                currentPage: payload
            }
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoading: payload
            }
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                   if (user.id === payload) {
                       return {
                           ...user,
                           followed: true
                       }
                   }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === payload) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        case ADD_DELETE_BTN_BLOCK:
            return {
                ...state,
                blockBtnById: payload.bool ?
                    [...state.blockBtnById, payload.id] :
                    state.blockBtnById.filter((id) => id !== payload.id)
            }
        default:
            return state
    }
}

export const getAllUsers = (currentPage, count) => (dispatch) => {
    dispatch({ type: 'TOGGLE_LOADER', payload: true })
    dispatch({ type: 'PAGE_CHANGED', payload: currentPage })
    usersApi.getUsers(currentPage, count)
        .then(res => {
            dispatch({ type: 'GET_USERS', payload: res.data });
            dispatch({ type: 'TOGGLE_LOADER', payload: false });
        })
}

export const followUser = (id) => (dispatch) => {
    dispatch({ type: 'ADD_DELETE_BTN_BLOCK', payload: {id, bool: true} });
    usersApi.onFollow(id)
        .then((res) => {
            if(res.data.resultCode === 0){
                dispatch({ type: 'FOLLOW_USER', payload: id })
            }
            dispatch({ type: 'ADD_DELETE_BTN_BLOCK', payload: {id, bool: false} });
        })
}

export const unfollowUser = (id) => (dispatch) => {
    dispatch({ type: 'ADD_DELETE_BTN_BLOCK', payload: {id, bool: true} });
    usersApi.onUnfollow(id)
        .then((res) => {
            if(res.data.resultCode === 0){
                dispatch({ type: 'UNFOLLOW_USER', payload: id })
            }
            dispatch({ type: 'ADD_DELETE_BTN_BLOCK', payload: {id, bool: false} });
        })
}