import firebase from 'firebase';

export const requestEditTodo = todo => ({
  type: 'REQUEST_EDIT_TODO',
  todo,
});
export const responseEditTodo = todo => ({
  type: 'RESPONSE_EDIT_TODO',
  todo,
});
export const failureResponseEditTodo = error => ({
  type: 'FAILURE_RESPONSE_EDIT_TODO',
  error,
});
export const requestEdit = todo => async (dispatch) => {
  dispatch(requestEditTodo(todo));
  try {
    const result = await new Promise((resolve) => {
      const ref = firebase.database().ref(`/${todo.id}`);
      const newTodo = {
        id: todo.id,
        text: todo.text,
        completed: todo.completed,
        userId: todo.userId,
      };
      ref.set(newTodo);
      resolve(newTodo);
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseEditTodo(result));
  } catch (e) {
    return dispatch(failureResponseEditTodo(e));
  }
};
