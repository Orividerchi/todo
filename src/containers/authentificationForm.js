import { connect } from 'react-redux';
import { googleSignIn } from '../actions/googleLogin';
import { passwordLogin } from '../actions/passwordLogin';
import { signUp } from '../actions/passwordRegister';
import Authentification from '../components/Authentication';

const mapStateToProps = () => ({
  state: [],
});

const mapDispatchToProps = dispatch => ({
  onGoogleLogin: () => dispatch(googleSignIn()),
  onPasswordLogin: (email, login) => dispatch(passwordLogin(email, login)),
  onPasswordRegister: (email, login) => dispatch(signUp(email, login)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentification);
