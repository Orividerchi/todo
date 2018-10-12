import firebase from 'firebase';
import { passwordLogin } from './passwordLogin';

export const requestPasswordRegister = (email, password) => ({
  type: 'REQUEST_PASSWORD_REGISTER',
  email,
  password,
});
export const responsePasswordRegister = user => ({
  type: 'RESPONSE_PASSWORD_REGISTER',
  user,
});
export const failureResponsePasswordRegister = error => ({
  type: 'FAILURE_RESPONSE_PASSWORD_REGISTER',
  error,
});
export const passwordRegister = (email, password) => async (dispatch) => {
  dispatch(requestPasswordRegister(email, password));
  const result = await new Promise((resolve) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      dispatch(passwordLogin(email, password));
      resolve(user);
    }).catch((e) => {
      alert(e);
      dispatch(failureResponsePasswordRegister(e));
    });
  });
  return dispatch(responsePasswordRegister(result));
};
