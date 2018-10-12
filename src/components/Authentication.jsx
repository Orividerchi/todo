import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import PasswordLoginForm from './PasswordLoginForm';

/**
 * @param {any} props functions for authentication and registration
 * @returns {JSX} form for registration and log in
 */
function Authentication(props) {
  const { onGoogleLogin } = props;
  const { onPasswordRegister } = props;
  const { onPasswordLogin } = props;
  return (
    <div className="container">
      <button type="button" onClick={onGoogleLogin}>
        Sign In with Google
      </button>
      <hr />
      <RegisterForm onPasswordRegister={onPasswordRegister} />
      <hr />
      <PasswordLoginForm onPasswordLogin={onPasswordLogin} />
    </div>
  );
}

Authentication.propTypes = {
  onGoogleLogin: PropTypes.func.isRequired,
  onPasswordLogin: PropTypes.func.isRequired,
  onPasswordRegister: PropTypes.func.isRequired,
};

export default Authentication;
