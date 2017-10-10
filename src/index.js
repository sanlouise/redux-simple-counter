import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './containers/App.js';
import appReducer from './containers/reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('#root')
);
