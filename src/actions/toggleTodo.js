import firebase from 'firebase';

const REQUEST_TOGGLE_TODO = 'REQUEST_TOGGLE_TODO';
const RESPONSE_TOGGLE_TODO = 'RESPONSE_TOGGLE_TODO';
const FAILURE_RESPONSE_TOGGLE_TODO = 'FAILURE_RESPONSE_TOGGLE_TODO';

export const requestToggleTodo = todo => ({
  type: REQUEST_TOGGLE_TODO,
  todo,
});
export const responseToggleTodo = todo => ({
  type: RESPONSE_TOGGLE_TODO,
  todo,
});
export const failureResponseToggleTodo = error => ({
  type: FAILURE_RESPONSE_TOGGLE_TODO,
  error,
});
export const toggleTodo = todo => async (dispatch) => {
  dispatch(requestToggleTodo(todo));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref(`/${todo.id}`).child('completed');
      const completed = !todo.completed;
      ref.set(completed).then(() => resolve(completed)).catch(e => reject(new Error(e)));
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseToggleTodo(result));
  } catch (e) {
    return dispatch(failureResponseToggleTodo(e));
  }
};
