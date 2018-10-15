import firebase from 'firebase';
import currentUser from '../firebase/user';

const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO';
const RESPONSE_ADD_TODO = 'RESPONSE_ADD_TODO';
const FAILURE_RESPONSE_ADD_TODO = 'FAILURE_RESPONSE_ADD_TODO';

export const requestAddTodo = text => ({
  type: REQUEST_ADD_TODO,
  text,
});
export const responseAddTodo = todo => ({
  type: RESPONSE_ADD_TODO,
  todo,
});
export const failureResponseAddTodo = error => ({
  type: FAILURE_RESPONSE_ADD_TODO,
  error,
});
export const requestAdd = text => async (dispatch) => {
  dispatch(requestAddTodo(text));
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref('/').push();
      const todo = {
        id: ref.key,
        text,
        completed: false,
        userId: currentUser.uid,
      };
      ref.set(todo)
        .then(() => resolve(todo))
        .catch(e => reject(e));
    });
    if (!result) {
      throw new Error('Can\'t added');
    }
    return dispatch(responseAddTodo(result));
  } catch (e) {
    return dispatch(failureResponseAddTodo(e));
  }
};
