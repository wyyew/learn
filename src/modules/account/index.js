import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import AppRoot from './containers/counter'

let currentValue = store.getState();


const rootEl = document.getElementById('account');
render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  rootEl
)
