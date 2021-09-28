import { UPDATE_TOKEN } from '../actions/userAction'
const initalState = ''

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return action.payload
        default: return state
    }
}

export default userReducer