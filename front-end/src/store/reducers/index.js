import { combineReducers } from 'redux'
import userReducer from './userReducer'
import tokenReducer from './tokenReducer'
import navReducer from './navReducer'

const rootReducer = combineReducers({
    user: userReducer,
    userToken: tokenReducer,
    navReducer: navReducer
})

export default rootReducer