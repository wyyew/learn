import { createStore } from 'redux'
import counter from './reducerCounter'

const store = createStore(counter);

export default store
