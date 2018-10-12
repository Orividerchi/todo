import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AuthenticationForm from './containers/authentificationForm';
import currentUser from './firebase/user';
import rootReducer from './Reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import app from './firebase/firebase';

require('dotenv').config();

app.auth().onAuthStateChanged((user) => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  if (user) {
    Object.assign(currentUser, user);
    render(
      <Provider store={store}>
        <App className="container" />
      </Provider>,
      document.getElementById('root'),
    );
  } else {
    render(
      <Provider store={store}>
        <AuthenticationForm />
      </Provider>,
      document.getElementById('root'),
    );
  }
});
