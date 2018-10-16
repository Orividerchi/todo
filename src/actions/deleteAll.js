import firebase from 'firebase';

const DELETE_USER_COMPLETED_TODOS_REQUEST = 'DELETE_USER_COMPLETED_TODOS_REQUEST';
const DELETE_USER_COMPLETED_TODOS_RESPONSE = 'DELETE_USER_COMPLETED_TODOS_RESPONSE';
const DELETE_USER_COMPLETED_TODOS_FAILURE_RESPONSE = 'DELETE_USER_COMPLETED_TODOS_FAILURE_RESPONSE';

export const deleteUserCompletedTodosRequest = todos => ({
  type: DELETE_USER_COMPLETED_TODOS_REQUEST,
  todos,
});
export const deleteUserCompletedTodosResponse = todos => ({
  type: DELETE_USER_COMPLETED_TODOS_RESPONSE,
  todos,
});
export const deleteUserCompletedTodosFailureResponse = error => ({
  type: DELETE_USER_COMPLETED_TODOS_FAILURE_RESPONSE,
  error,
});
export const deleteAllCompletedTodos = todos => async (dispatch) => {
  dispatch(deleteUserCompletedTodosRequest(todos));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref();
      const newTodos = {};
      todos.reduce((prev, todo) => {
        if (todo.completed) {
          newTodos[`/${todo.id}`] = null;
        }
        return null;
      }, 0);
      ref.update(newTodos)
        .then(resolve(newTodos))
        .catch(reject(new Error()));
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(deleteUserCompletedTodosResponse(result));
  } catch (e) {
    return dispatch(deleteUserCompletedTodosFailureResponse(e));
  }
};
