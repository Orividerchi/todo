import firebase from 'firebase';
import currentUser from '../firebase/user';

const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
const ADD_TODO_RESPONSE = 'ADD_TODO_RESPONSE';
const ADD_TODO_FAILURE_RESPONSE = 'ADD_TODO_FAILURE_RESPONSE';

export const addTodoRequest = text => ({
  type: ADD_TODO_REQUEST,
  text,
});
export const addTodoResponse = todo => ({
  type: ADD_TODO_RESPONSE,
  todo,
});
export const addTodoFailureResponse = error => ({
  type: ADD_TODO_FAILURE_RESPONSE,
  error,
});
export const addTodo = text => async (dispatch) => {
  dispatch(addTodoRequest(text));
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
    return dispatch(addTodoResponse(result));
  } catch (e) {
    return dispatch(addTodoFailureResponse(e));
  }
};
