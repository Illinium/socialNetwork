const initialState = [
        { id: 1, userName: 'Angelina' },
        { id: 2, userName: 'Tolya' },
        { id: 3, userName: 'Maria' },
        { id: 4, userName: 'Sashunya' },
        { id: 5, userName: 'Angelina' }

];

export default function (state=  initialState, action) {
    const {type} = action
    switch (type) {
        default:
            return state
    }
}