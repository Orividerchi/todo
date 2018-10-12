import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestAdd } from '../actions/addTodo';
import { requestTodoList } from '../actions/requestTodoList';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="addTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(requestAdd(input.value)).then(
            dispatch(requestTodoList()),
          );
          input.value = '';
        }}
      >
        <input ref={(node) => { input = node; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
