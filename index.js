import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import App from './components/App'

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()]


let store = null;

function createAppStore(defaultState) {
  if (store === null) {
    store = createStore(
      reducer,
      defaultState,
      applyMiddleware(...middleware)
    );
  }
  return store;
}

store = createAppStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)