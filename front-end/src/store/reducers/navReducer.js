import { UPDATE_NAV } from '../actions/navAction'

const initalState = {
    current: 'home',
    home: true,
    friend: false,
    message: false,
    video: false,
    notification: false,
    menu: false
}

const navReducer = (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_NAV:
            return {
                ...state,
                [state.current]: false,
                current: action.payload,
                [action.payload]: true
            }
        default:
            return state;
    }
}

export default navReducer;