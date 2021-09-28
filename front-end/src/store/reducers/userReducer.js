import { UPDATE_USER } from '../actions/userAction'

const initalState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: {
    }
}

const userReducer = (state = initalState, action) => {

    switch (action.type) {
        case UPDATE_USER:
            return action.payload;
        default: return state
    }
}

export default userReducer