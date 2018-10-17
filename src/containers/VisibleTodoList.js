import { connect } from 'react-redux';
import { toggleTodoRequest } from '../actions/toggleTodo';
import { deleteUserCompletedTodosRequest } from '../actions/deleteAll';
import TodoList from '../components/TodoList';
import { updateTodoRequest } from '../actions/editTodo';
import { VisibilityFilters } from '../actions/visibilityFilters';
import { getTodosRequest } from '../actions/requestTodoList';
import { deleteTodoRequest } from '../actions/deleteTodo';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.list, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  requestTodoList: () => dispatch(getTodosRequest()),
  onToggleTodo: todo => dispatch(toggleTodoRequest(todo)),
  onDeleteAll: todos => dispatch(deleteUserCompletedTodosRequest(todos)),
  onDeleteTodo: id => dispatch(deleteTodoRequest(id)),
  onEditTodo: todo => dispatch(updateTodoRequest(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
