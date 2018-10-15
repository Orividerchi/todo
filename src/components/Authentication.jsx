import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import PasswordLoginForm from './PasswordLoginForm';

/**
 * @returns {JSX} form for registration and log in
 */
class Authentication extends React.Component {
  /**
   * @param {any} props functions for login and registration
   */
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
    };
  }

  handleLoginClick = () => {
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }));
  }

  /**
   * @returns {JSX} form for registration and log in
   */
  render() {
    const { visibility } = this.state;
    const { onGoogleLogin } = this.props;
    const { onPasswordRegister } = this.props;
    const { onPasswordLogin } = this.props;
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
            <div className="col-lg-12 d-flex justify-content-center">
              <div className={
                (visibility)
                  ? 'active'
                  : 'hidden'
                }
              >
                <PasswordLoginForm onPasswordLogin={onPasswordLogin} />
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-link" onClick={this.handleLoginClick}>
                    Register now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <div className={
                  (visibility)
                    ? 'hidden'
                    : 'active'
                }
              >
                <RegisterForm onPasswordRegister={onPasswordRegister} />
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-link" onClick={this.handleLoginClick}>
                    Have account?
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="social">
                <span className="separator-text">Or Sign Up Using</span>
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
