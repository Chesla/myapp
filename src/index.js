import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import mainReducer from './reducers';
import AppContainer from './container/AppContainer';
// import * as serviceWorker from './serviceWorker';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(thunk));
// sagaMiddleware.run(thunk);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
