import { connect } from 'react-redux';
import { googleSignInRequest } from '../actions/googleLogin';
import { passwordSignInRequest } from '../actions/passwordLogin';
import { signUpRequest } from '../actions/passwordRegister';
import Authentification from '../components/Authentication';

const mapStateToProps = () => ({
  state: [],
});

const mapDispatchToProps = dispatch => ({
  onGoogleLogin: () => dispatch(googleSignInRequest()),
  onPasswordLogin: (email, login) => dispatch(passwordSignInRequest(email, login)),
  onPasswordRegister: (email, login) => dispatch(signUpRequest(email, login)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentification);
