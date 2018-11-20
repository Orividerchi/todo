import { combineReducers } from 'redux';
import todos from './RequestTodoList';
import products from './product';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
  products,
});
