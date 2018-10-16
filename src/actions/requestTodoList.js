import firebase from 'firebase';
import currentUser from '../firebase/user';

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_RESPONSE = 'GET_TODOS_RESPONSE';
const GET_TODOS_FAILURE_RESPONSE = 'GET_TODOS_FAILURE_RESPONSE';

export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST,
});
export const getTodosResponse = todos => ({
  type: GET_TODOS_RESPONSE,
  todos,
});
export const getTodosFailureResponse = error => ({
  type: GET_TODOS_FAILURE_RESPONSE,
  error,
});
export const getTodos = () => async (dispatch) => {
  dispatch(getTodosRequest());
  try {
    const result = await new Promise((resolve, reject) => {
      const ref = firebase.database().ref('/');
      ref.orderByChild('userId').equalTo(currentUser.uid).once('value', (snapshot) => {
        resolve(snapshot.val());
      }).catch(e => reject(new Error(e)));
    });
    if (!result) {
      throw new Error('Data not found');
    }
    const mappedTodos = Object
      .keys(result)
      .map(key => result[key]);
    return dispatch(getTodosResponse(mappedTodos));
  } catch (e) {
    return dispatch(getTodosFailureResponse(e));
  }
};
