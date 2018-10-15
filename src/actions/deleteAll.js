import firebase from 'firebase';

const DELETE_ALL_COMPLETED_REQUEST = 'DELETE_ALL_COMPLETED_REQUEST';
const DELETE_ALL_COMPLETED_RESPONCE = 'DELETE_ALL_COMPLETED_RESPONCE';
const DELETE_ALL_COMPLETED_FAILURE_RESPONCE = 'DELETE_ALL_COMPLETED_FAILURE_RESPONCE';

export const requestDeleteAllCompleted = todos => ({
  type: DELETE_ALL_COMPLETED_REQUEST,
  todos,
});
export const responseDeleteAllCompleted = todos => ({
  type: DELETE_ALL_COMPLETED_RESPONCE,
  todos,
});
export const failureResponseDeleteAllCompleted = error => ({
  type: DELETE_ALL_COMPLETED_FAILURE_RESPONCE,
  error,
});
export const deleteAllCompletedTodo = todos => async (dispatch) => {
  dispatch(requestDeleteAllCompleted(todos));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref();
      const newTodos = {};
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].completed) {
          newTodos[`/${todos[i].id}`] = null;
        }
      }
      ref.update(newTodos);
      resolve(newTodos);
      reject(new Error());
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseDeleteAllCompleted(result));
  } catch (e) {
    return dispatch(failureResponseDeleteAllCompleted(e));
  }
};
