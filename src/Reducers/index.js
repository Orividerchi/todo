import { combineReducers } from 'redux';
import todos from './RequestTodoList';
import visibilityFilter from './visibilityFilter';
import user from './user';

export default combineReducers({
  todos,
  visibilityFilter,
  user,
});
