import React from 'react';

const AddTodo = (args) => {
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
          args.addTodo(input.value);
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

export default AddTodo;
