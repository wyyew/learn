import React, { Component } from 'react'
import Counter from './componentCounter'
import { connect } from 'react-redux'

const AppRoot =  connect(
  (state) => ({value: state}),
  (dispatch) => {
    return{
      onIncrement: () => dispatch({ type: 'INCREMENT' }),
      onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
  })(Counter);
export default AppRoot
