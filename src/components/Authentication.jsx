import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import PasswordLoginForm from './PasswordLoginForm';

/**
 * @returns {JSX} form for registration and log in
 */
class Authentication extends React.Component {
  SIGN_IN_VIEW = 'SIGN_IN_VIEW';

  SIGN_UP_VIEW = 'SIGN_UP_VIEW';

  /**
   * @param {any} props functions for login and registration
   */
  constructor(props) {
    super(props);
    this.state = {
      activeView: this.SIGN_IN_VIEW,
    };
  }

  handleLoginClick = () => {
    const { activeView } = this.state;
    if (activeView === this.SIGN_IN_VIEW) {
      this.setState({
        activeView: this.SIGN_UP_VIEW,
      });
    } else {
      this.setState({
        activeView: this.SIGN_IN_VIEW,
      });
    }
  }

  /**
   * @returns {JSX} Sign in form
   */
  renderSignInView =() => {
    const { onPasswordLogin } = this.props;
    return (
      <div className="col-lg-12 d-flex justify-content-center">
        <div>
          <PasswordLoginForm onPasswordLogin={onPasswordLogin} />
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-link" onClick={this.handleLoginClick}>
              Register now
            </button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * @returns {JSX} Sign up form
   */
  renderSignUpView = () => {
    const { onPasswordRegister } = this.props;
    return (
      <div className="col-lg-12 d-flex justify-content-center">
        <div>
          <RegisterForm onPasswordRegister={onPasswordRegister} />
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-link" onClick={this.handleLoginClick}>
              Already have an account
            </button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * @returns {JSX} Actieve View
   */
  renderActiveView = () => {
    const { activeView } = this.state;
    switch (activeView) {
      case this.SIGN_IN_VIEW:
        return this.renderSignInView();
      case this.SIGN_UP_VIEW:
        return this.renderSignUpView();
      default:
        return null;
    }
  }

  /**
   * @returns {JSX} form for registration and log in
   */
  render() {
    const { onGoogleLogin } = this.props;
    return (
      <div className="panel-body">
        <h1 className="d-flex justify-content-center">
          TODO LIST
        </h1>
        <h5 className="d-flex justify-content-center">
          React-Redux application
        </h5>
        <div className="container">
          <div className="row">
            {this.renderActiveView()}
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="social">
                <span className="separator-text ">Or</span>
                <button type="button" onClick={onGoogleLogin} className="loginBtn loginBtn--google">
                  Sign In with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Authentication.propTypes = {
  onGoogleLogin: PropTypes.func.isRequired,
  onPasswordLogin: PropTypes.func.isRequired,
  onPasswordRegister: PropTypes.func.isRequired,
};

export default Authentication;
