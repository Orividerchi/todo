import React from 'react';
import PropTypes from 'prop-types';

const deleteSymbol = '🗴';

/**
 * @returns {JSX} todo item
 * @param {any} e element
 */
class Todo extends React.Component {
/**
* @param {*} props all props
*/
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      id: props.id,
      completed: props.completed,
      userId: props.userId,
      visible: false,
    };
  }

handleMouseEnter = () => {
  this.setState({
    visible: true,
  });
}

handleMouseLeave = () => {
  this.setState({
    visible: false,
  });
}

handleOnChangeTodoState = () => {
  const { onClick } = this.props;
  const { id } = this.state;
  const { text } = this.state;
  const { completed } = this.state;
  const { userId } = this.state;
  const { requestTodoList } = this.props;
  onClick({
    id,
    text,
    completed,
    userId,
  }).then(requestTodoList());
  this.setState(prevState => ({
    completed: !prevState.completed,
  }));
}

handleMouseClickDeleteButton = () => {
  const { deleteTodo } = this.props;
  const { id } = this.state;
  const { requestTodoList } = this.props;
  deleteTodo(id).then(
    requestTodoList(),
  );
}

handleTextChange = (e) => {
  this.setState({
    text: e.target.value,
  });
}

handleTextBlur = () => {
  const { editTodo } = this.props;
  const { id } = this.state;
  const { text } = this.state;
  const { completed } = this.state;
  const { userId } = this.state;
  editTodo({
    id,
    text,
    completed,
    userId,
  });
}

/**
 * @returns {JSX} todo item
 */
render() {
  const { completed } = this.state;
  const { text } = this.state;
  const { visible } = this.state;
  return (
    <li>
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input type="checkbox" onChange={this.handleOnChangeTodoState} checked={completed} className="checkbox" />
        <input
          type="text"
          value={text}
          onChange={this.handleTextChange}
          onBlur={this.handleTextBlur}
          className={
            (completed)
              ? 'completedTodo'
              : 'todo'
          }
        />
        <button
          type="button"
          style={{
            display: visible ? 'inline' : 'none',
          }}
          onClick={this.handleMouseClickDeleteButton}
        >
          {deleteSymbol}
          {' '}

        </button>
      </div>
    </li>
  );
}
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  requestTodoList: PropTypes.func.isRequired,
};

export default Todo;
