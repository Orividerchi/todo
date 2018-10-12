import firebase from 'firebase';
import currentUser from '../firebase/user';

export const requestTodos = () => ({
  type: 'REQUEST_TODOS',
});
export const responseTodos = todos => ({
  type: 'RESPONSE_TODOS',
  todos,
});
export const failureResponseTodos = error => ({
  type: 'FAILURE_RESPONSE_TODOS',
  error,
});
export const requestTodoList = () => async (dispatch) => {
  dispatch(requestTodos());
  try {
    const result = await new Promise((resolve) => {
      const ref = firebase.database().ref('/');
      ref.orderByChild('userId').equalTo(currentUser.uid).once('value', (snapshot) => {
        resolve(snapshot.val());
      });
    });
    if (!result) {
      throw new Error('Data not found');
    }
    const mappedTodos = Object
      .keys(result)
      .map((key) => {
        const x = result[key];
        return x;
      });
    return dispatch(responseTodos(mappedTodos));
  } catch (e) {
    return dispatch(failureResponseTodos(e));
  }
};
