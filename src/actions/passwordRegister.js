import firebase from 'firebase';
import { passwordLogin } from './passwordLogin';

const REQUEST_PASSWORD_REGISTER = 'REQUEST_PASSWORD_REGISTER';
const RESPONSE_PASSWORD_REGISTER = 'RESPONSE_PASSWORD_REGISTER';
const FAILURE_RESPONSE_PASSWORD_REGISTER = 'FAILURE_RESPONSE_PASSWORD_REGISTER';

export const requestPasswordRegister = (email, password) => ({
  type: REQUEST_PASSWORD_REGISTER,
  email,
  password,
});
export const responsePasswordRegister = user => ({
  type: RESPONSE_PASSWORD_REGISTER,
  user,
});
export const failureResponsePasswordRegister = error => ({
  type: FAILURE_RESPONSE_PASSWORD_REGISTER,
  error,
});
export const passwordRegister = (email, password) => async (dispatch) => {
  dispatch(requestPasswordRegister(email, password));
  await new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      dispatch(passwordLogin(email, password));
      resolve(user);
    }).catch((e) => {
      alert(e);
      reject(e);
      return dispatch(failureResponsePasswordRegister(e));
    });
  });
};
