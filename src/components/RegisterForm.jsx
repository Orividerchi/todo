import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} e - element
 * @returns {void}
 */
class RegisterForm extends React.Component {
  /**
   * @param {any} props - all props
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
    const { onPasswordRegister } = this.props;
    onPasswordRegister(email, password);
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
              Registration
        </h3>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="emailRegistration">
                  Email adress
              <input type="text" placeholder="Email" value={email} onChange={this.handleEmailEdit} id="emailRegistration" className="form-control" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
                  Password
              <input type="password" placeholder="Password" value={password} onChange={this.handlePasswordEdit} className="form-control" />
            </label>
          </div>
          <input type="button" value="Registration" onClick={this.handleRegisterSubmit} className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  onPasswordRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
