import {addAuthData} from "./auth";

const INITIALIZE_APP = 'INITIALIZE_APP';
const INITIALIZE_APP_TO_TRUE = 'INITIALIZE_APP_TO_TRUE';


const initialState = {
    initialize: false
};

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case INITIALIZE_APP:
            return {
             ...state,
                initialize: true
            }
        case INITIALIZE_APP_TO_TRUE:
            return {
                ...state,
                initialize: true
            }
        default:
            return state
    }
}

export const initializeApp = () => (dispatch) => {
    dispatch(addAuthData());
}

export const initializeAppToTrue = () => (dispatch) => {
    dispatch({type: INITIALIZE_APP_TO_TRUE});
}