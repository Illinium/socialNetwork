const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    newMessageText: '',
    dialog: [
        {id: 1, message: 'adasdasdas'},
        {id: 2, message: 'asdasdasd'},
        {id: 3, message: 'adsdadasdsadadasdd'},
        {id: 4, message: 'gggggggg'},
        {id: 5, message: 'aadasdadasdaaghjkl;lllll'}
    ]
};

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case CHANGE_MESSAGE:
            return {
                ...state,
                newMessageText: payload
            }
        case SEND_MESSAGE:
            return {
                ...state,
                dialog: [...state.dialog, {id: 6, message: state.newMessageText}],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const messageOnChange = (text) => ({ type: 'CHANGE_MESSAGE', payload: text });
export const sendMessage = (text) => ({ type: 'SEND_MESSAGE'});

