import {combineReducers} from 'redux';
import users from './users'
import userDetails from './userDetails';

const rootReducer = combineReducers({
    users,
    userDetails
})

export default rootReducer;