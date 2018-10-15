import firebase from 'firebase';

const REQUEST_EDIT_TODO = 'REQUEST_EDIT_TODO';
const RESPONSE_EDIT_TODO = 'RESPONSE_EDIT_TODO';
const FAILURE_RESPONSE_EDIT_TODO = 'FAILURE_RESPONSE_EDIT_TODO';

export const requestEditTodo = todo => ({
  type: REQUEST_EDIT_TODO,
  todo,
});
export const responseEditTodo = todo => ({
  type: RESPONSE_EDIT_TODO,
  todo,
});
export const failureResponseEditTodo = error => ({
  type: FAILURE_RESPONSE_EDIT_TODO,
  error,
});
export const updateTodo = todo => async (dispatch) => {
  dispatch(requestEditTodo(todo));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref(`${todo.id}`).child('text');
      const newText = todo.text;
      ref.set(newText)
        .then(() => resolve(newText))
        .catch(e => reject(e));
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseEditTodo(result));
  } catch (e) {
    return dispatch(failureResponseEditTodo(e));
  }
};
