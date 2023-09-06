import { combineReducers } from 'redux';
import initial from './initial';
import user from './user';

const rootReducer = combineReducers({
  initial,
  user,
});

export default rootReducer;
