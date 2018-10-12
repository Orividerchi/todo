import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} e - element
 * @returns {void}

 */
class PasswordLoginForm extends React.Component {
  /**
   * @param {any} props - all props
   * @param {object} props.onPasswordLogin dispatch action passwordAction
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailEdit = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordEdit = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegisterSubmit = () => {
    const { email } = this.state;
    const { password } = this.state;
    const { onPasswordLogin } = this.props;
    onPasswordLogin(email, password);
    return false;
  }

  /**
   * @returns {void}
   */
  render() {
    const { email } = this.state;
    const { password } = this.state;
    return (
      <div className="LoginForm">
        <p>Log In</p>
        <input type="text" placeholder="mail" value={email} onChange={this.handleEmailEdit} />
        <input type="password" placeholder="pass" value={password} onChange={this.handlePasswordEdit} />
        <input type="button" value="ok" onClick={this.handleRegisterSubmit} />
      </div>
    );
  }
}

PasswordLoginForm.propTypes = {
  onPasswordLogin: PropTypes.func.isRequired,
};

export default PasswordLoginForm;
