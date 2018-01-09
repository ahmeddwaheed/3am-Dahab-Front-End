import {combineReducers} from 'redux';
import users from './users'
import userCard from './userCard';
import pools from './pools';
import notifications from './notifications';

const rootReducer = combineReducers({
  pools,
  users,
  userCard,
  notifications
})

export default rootReducer
