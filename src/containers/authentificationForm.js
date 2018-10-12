import { connect } from 'react-redux';
import { googleLogin } from '../actions/googleLogin';
import { passwordLogin } from '../actions/passwordLogin';
import { passwordRegister } from '../actions/passwordRegister';
import Authentification from '../components/Authentication';

const mapStateToProps = () => ({
  state: [],
});

const mapDispatchToProps = dispatch => ({
  onGoogleLogin: () => dispatch(googleLogin()),
  onPasswordLogin: (email, login) => dispatch(passwordLogin(email, login)),
  onPasswordRegister: (email, login) => dispatch(passwordRegister(email, login)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentification);
