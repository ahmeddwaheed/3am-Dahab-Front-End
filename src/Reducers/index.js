import {combineReducers} from 'redux';
import users from './users'
import userCard from './userCard';
import pools from './pools';

const rootReducer = combineReducers({
  pools,
  users,
  userCard
})

export default rootReducer
