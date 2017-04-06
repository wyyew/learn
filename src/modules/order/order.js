import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../static/js/reducers/index';

import Main from './containerOrder'


const store = createStore(reducers)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('order')
)
