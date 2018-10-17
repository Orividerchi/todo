import React from 'react';
import PropTypes from 'prop-types';


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
    };
  }

handleOnChangeTodoState = () => {
  const { onClick } = this.props;
  const { id } = this.state;
  const { text } = this.state;
  const { completed } = this.state;
  const { userId } = this.state;
  onClick({
    id,
    text,
    completed,
    userId,
  });
}

handleMouseClickDeleteButton = () => {
  const { deleteTodo } = this.props;
  const { id } = this.state;
  deleteTodo(id);
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
  return (
    <li>
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={this.handleTextChange}
          onBlur={this.handleTextBlur}
          className={
            (completed)
              ? 'form-control completedTodo'
              : 'form-control'
            }
        />
        <div className="input-group-append">
          <button type="button" onClick={this.handleOnChangeTodoState} className="btn btn-success">
            Done
          </button>
          <button
            type="button"
            onClick={this.handleMouseClickDeleteButton}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
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
};

export default Todo;
