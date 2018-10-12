import { combineReducers } from 'redux';
import todos from './RequestTodoList';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
});
