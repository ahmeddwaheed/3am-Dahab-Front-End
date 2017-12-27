import {combineReducers} from 'redux';
import users from './users'
import userCard from './userCard';

const rootReducer = combineReducers({
    users,
    userCard
})

export default rootReducer;