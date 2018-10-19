import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import AddTodo from '../containers/AddTodo';

/**
 * List of todo
 * @returns {JSX} List of todo
 */
class TodoList extends React.Component {
  /**
   * @returns {void}
   */
  componentDidMount() {
    const { requestTodoList } = this.props;
    requestTodoList();
  }

  handeDeleteUsersTodos = () => {
    const { onDeleteAll, todos } = this.props;
    onDeleteAll(todos);
  }

  handleSignOutButton = () => {
    const { logOut } = this.props;
    logOut();
  }

  /**
   * @returns {JSX} list of todo
   */
  render() {
    const { todos } = this.props;
    const { onToggleTodo } = this.props;
    const { onEditTodo } = this.props;
    const { onDeleteTodo } = this.props;
    const { requestTodoList } = this.props;
    if (todos.length > 0) {
      return (
        <div className="form-group">
          <ul className="list-group">
            {todos.map(todo => (<Todo
              key={todo.id}
              {...todo}
              onClick={onToggleTodo}
              deleteTodo={onDeleteTodo}
              editTodo={onEditTodo}
              requestTodoList={requestTodoList}
            />
            ))}
            <li>
              <AddTodo />
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-warning"
                type="button"
                onClick={this.handeDeleteUsersTodos}
              >
                Delete all completed
              </button>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button
                type="button"
                onClick={this.handleSignOutButton}
                className="btn btn-warning"
              >
              Sign Out
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <ul className="list-group">
          <li>
            <AddTodo />
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <button
              className="btn btn-warning"
              type="button"
              onClick={this.handeDeleteUsersTodos}
            >
          Delete all completed
            </button>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              type="button"
              onClick={this.handleSignOutButton}
              className="btn btn-warning"
            >
        Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
