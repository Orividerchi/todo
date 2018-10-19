import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from '../utils/injectSagas';
import saga from '../sagas/authentificationFormSagas';
import { googleSignInRequest } from '../actions/googleLogin';
import { passwordSignInRequest } from '../actions/passwordLogin';
import { signUpRequest } from '../actions/passwordRegister';
import Authentification from '../components/Authentication';

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  onGoogleLogin: () => dispatch(googleSignInRequest()),
  onPasswordLogin: (email, login) => dispatch(passwordSignInRequest(email, login)),
  onPasswordRegister: (email, login) => dispatch(signUpRequest(email, login)),
});

const withSaga = injectSaga({ key: 'Authentification', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withSaga,
)(Authentification);
