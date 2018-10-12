import firebase from 'firebase';
import currentUser from '../firebase/user';

export const requestAddTodo = text => ({
  type: 'REQUEST_ADD_TODO',
  text,
});
export const responseAddTodo = todo => ({
  type: 'RESPONSE_ADD_TODO',
  todo,
});
export const failureResponseAddTodo = error => ({
  type: 'FAILURE_RESPONSE_ADD_TODO',
  error,
});
export const requestAdd = text => async (dispatch) => {
  dispatch(requestAddTodo(text));
  try {
    const result = await new Promise((resolve) => {
      const ref = firebase.database().ref('/').push();
      const todo = {
        id: ref.key,
        text,
        completed: false,
        userId: currentUser.uid,
      };
      ref.set(todo);
      resolve(todo);
    });
    if (!result) {
      throw new Error("Can't add todo");
    }
    return dispatch(responseAddTodo(result));
  } catch (e) {
    return dispatch(failureResponseAddTodo(e));
  }
};
