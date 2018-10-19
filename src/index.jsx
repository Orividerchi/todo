import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

require('dotenv').config();

const saga = createSagaMiddleware();
const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(logger, saga));
store.injectedSagas = {};
store.runSaga = saga.run;
render(
  <Provider store={store}>
    <App className="container" />
  </Provider>,
  document.getElementById('root'),
);
