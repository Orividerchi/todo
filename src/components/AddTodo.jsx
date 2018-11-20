import React from 'react';

const AddTodo = (args) => {
  let input;
  return (
    <div className="AddTodo">
      <form
        className="input-group"
        onSubmit={(e) => {
          console.log(input.value);
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          args.addTodo(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
          placeholder="Product name"
          className="form-control"
          type="text"
        />
        <input
          ref={(node) => {
            input = node;
          }}
          type="number"
          placeholder="count"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
