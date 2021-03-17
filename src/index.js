import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './app/App';
import UIReducer from './app/store/reducers/ui';

const rootReducer = combineReducers({
  ui: UIReducer,
});

/* eslint-disable */
const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>
        <App />;
      </Router>
    </Provider>
  </>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}
