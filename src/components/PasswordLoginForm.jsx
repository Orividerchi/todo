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
      <div className="content">
        <h3 className="d-flex justify-content-center">
          Login
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="email">
            Email adress
            <input type="text" value={email} onChange={this.handleEmailEdit} className="form-control" id="email" placeholder="Email" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input type="password" value={password} onChange={this.handlePasswordEdit} className="form-control" id="password" placeholder="Password" />
          </label>
        </div>
        <input type="button" value="Login" onClick={this.handleRegisterSubmit} className="btn btn-primary" />
      </div>
    );
  }
}

PasswordLoginForm.propTypes = {
  onPasswordLogin: PropTypes.func.isRequired,
};

export default PasswordLoginForm;
