import { combineReducers } from 'redux';
// import nav from './nav';
import user from './userReducers';
import error from './errorReducers';

export default combineReducers({
  // nav
  user,
  error
});
