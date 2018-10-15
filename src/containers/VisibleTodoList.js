import { connect } from 'react-redux';
import { toggleTodo } from '../actions/toggleTodo';
import { deleteAllCompletedTodo } from '../actions/deleteAll';
import { deleteTodo } from '../actions/deleteTodo';
import { updateTodo } from '../actions/editTodo';
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
  onToggleTodo: todo => dispatch(toggleTodo(todo)),
  onDeleteAll: todos => dispatch(deleteAllCompletedTodo(todos)),
  onDeleteTodo: todo => dispatch(deleteTodo(todo)),
  onEditTodo: todo => dispatch(updateTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
