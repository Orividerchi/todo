import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';
import { getTodos } from '../actions/requestTodoList';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="AddTodo">
      <form
        className="input-group"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value)).then(
            dispatch(getTodos()),
          );
          input.value = '';
        }}
      >
        <input ref={(node) => { input = node; }} className="form-control" type="text" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
                Add New ToDo
          </button>
        </div>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
