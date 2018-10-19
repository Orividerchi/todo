import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import VisibleTodoList from '../containers/VisibleTodoList';
import AuthenticationForm from '../containers/authentificationForm';

/**
 * @returns {JSX} Application form
 */
class App extends React.Component {
  /**
   * @returns {void}
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    console.log(props.user);
    this.state = {
      user: props.user,
    };
  }


  /**
   * @returns {void}
   * @param {*} props props
   * @param {*} state state
   */
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.user !== state.user) {
      return {
        user: props.user,
      };
    }
    return null;
  }

  /**
   * @returns {JSX} ret
   */
  render() {
    const { user } = this.state;
    if (user) {
      return (
        <div className="container">
          <Header />
          <VisibleTodoList />
        </div>
      );
    }
    return (
      <AuthenticationForm />
    );
  }
}

App.propTypes = {
  user: PropTypes.bool.isRequired,
};

export default App;
