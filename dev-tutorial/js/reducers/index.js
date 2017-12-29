import {combineReducers} from 'redux';
import UserReducer from './redcuer-users';

const allReducers = combineReducers({
  users: UserReducer
});
