import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Router object decides which components to render when URL changes
// browserHistory object tells react router how to interpret changes to the URL (hashHistory is everything after '#' in URL, etc.)
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
