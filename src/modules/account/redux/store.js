import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from '../reducers/counter'

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store
