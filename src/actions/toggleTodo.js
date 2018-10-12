import firebase from 'firebase';

export const requestToggleTodo = todo => ({
  type: 'REQUEST_TOGGLE_TODO',
  todo,
});
export const responseToggleTodo = todo => ({
  type: 'RESPONSE_TOGGLE_TODO',
  todo,
});
export const failureResponseToggleTodo = error => ({
  type: 'FAILURE_RESPONSE_TOGGLE_TODO',
  error,
});
export const requestToggle = todo => async (dispatch) => {
  dispatch(requestToggleTodo(todo));
  try {
    const result = await new Promise((resolve) => {
      const ref = firebase.database().ref(`/${todo.id}`);
      const newTodo = {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed,
        userId: todo.userId,
      };
      ref.set(newTodo);
      resolve(newTodo);
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseToggleTodo(result));
  } catch (e) {
    return dispatch(failureResponseToggleTodo(e));
  }
};
