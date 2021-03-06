import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './containers/counter'
import counter from './reducers/counter'
import { createStore } from 'redux'

// let currentValue = store.getState();

const initialState = window.__INITIAL_STATE__;
console.log(initialState);
const store = createStore(counter, initialState)

const rootEl = document.getElementById('account');
render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  rootEl
)
