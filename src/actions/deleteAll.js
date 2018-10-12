import firebase from 'firebase';

export const requestDeleteAllCompleted = todos => ({
  type: 'REQUEST_DELETE_ALL_COMPLETED',
  todos,
});
export const responseDeleteAllCompleted = todos => ({
  type: 'RESPONSE_DELETE_ALL_COMPLETED',
  todos,
});
export const failureResponseDeleteAllCompleted = error => ({
  type: 'FAILURE_RESPONSE_DELETE_ALL_COMPLETED',
  error,
});
export const requestDeleteAll = todos => async (dispatch) => {
  dispatch(requestDeleteAllCompleted(todos));
  try {
    const result = await new Promise((resolve) => {
      const ref = firebase.database();
      const newTodos = [];
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].completed) {
          newTodos.push(todos[i]);
        }
      }
      for (let i = 0; i < newTodos.length; i += 1) {
        ref.ref(`/${newTodos[i].id}`).remove();
      }
      resolve(newTodos);
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseDeleteAllCompleted(result));
  } catch (e) {
    return dispatch(failureResponseDeleteAllCompleted(e));
  }
};
