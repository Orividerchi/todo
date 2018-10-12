import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/**
 * List of todo
 */
class TodoList extends React.Component {
  /**
   * @returns {void}
   */
  componentDidMount() {
    const { requestTodoList } = this.props;
    requestTodoList();
  }

  /**
   * @returns {JSX} list of todo
   */
  render() {
    const { todos } = this.props;
    const { onToggleTodo } = this.props;
    const { onDeleteTodo } = this.props;
    const { onEditTodo } = this.props;
    const { onDeleteAll } = this.props;
    const { requestTodoList } = this.props;
    if (todos.length > 0) {
      return (
        <div>
          <ul>
            {todos.map(todo => (<Todo
              key={todo.id}
              {...todo}
              onClick={onToggleTodo}
              deleteTodo={onDeleteTodo}
              editTodo={onEditTodo}
              requestTodoList={requestTodoList}
            />
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onDeleteAll(todos).then(
              requestTodoList(),
            )}
          >
             Delete all completed
          </button>
        </div>
      );
    }
    return (
      <img src="https://www.engagewp.com/wp-content/uploads/2014/06/preloader.gif" alt="loading" />
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
