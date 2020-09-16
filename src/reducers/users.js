import {usersApi} from "../api/baseApi";

const GET_USERS = 'GET_USERS';
const PAGE_CHANGED = 'PAGE_CHANGED';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const FOLLOW_USER_TOGGLER = 'FOLLOW_USER_TOGGLER';
const ADD_DELETE_BTN_BLOCK = 'ADD_DELETE_BTN_BLOCK';

const initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    count: 100,
    isLoading: false,
    blockBtnById: []
};

export default function (state = initialState, action) {
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
        case FOLLOW_USER_TOGGLER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === payload) {
                        return {
                            ...user,
                            followed: !user.followed
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

export const getAllUsers = (currentPage, count) => async (dispatch) => {
    dispatch({type: 'TOGGLE_LOADER', payload: true});
    dispatch({type: 'PAGE_CHANGED', payload: currentPage});
    const res = await usersApi.getUsers(currentPage, count);
    dispatch({type: 'GET_USERS', payload: res.data});
    dispatch({type: 'TOGGLE_LOADER', payload: false});

}

export const followUnfollowUser = (id, followed) => async (dispatch) => {
    dispatch({type: 'ADD_DELETE_BTN_BLOCK', payload: {id, bool: true}});
    const apiFollowed = followed ? usersApi.onUnfollow(id) : usersApi.onFollow(id);
    const res = await apiFollowed;
    if (res.data.resultCode === 0) {
        dispatch({type: 'FOLLOW_USER_TOGGLER', payload: id})
    }
    dispatch({type: 'ADD_DELETE_BTN_BLOCK', payload: {id, bool: false}});
}