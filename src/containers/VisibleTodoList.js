import { connect } from 'react-redux';
import { requestToggle } from '../actions/toggleTodo';
import { requestDeleteAll } from '../actions/deleteAll';
import { requestDelete } from '../actions/deleteTodo';
import { requestEdit } from '../actions/editTodo';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions/visibilityFilters';
import { requestTodoList } from '../actions/requestTodoList';


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
  requestTodoList: () => dispatch(requestTodoList()),
  onToggleTodo: todo => dispatch(requestToggle(todo)),
  onDeleteAll: todos => dispatch(requestDeleteAll(todos)),
  onDeleteTodo: todo => dispatch(requestDelete(todo)),
  onEditTodo: todo => dispatch(requestEdit(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
