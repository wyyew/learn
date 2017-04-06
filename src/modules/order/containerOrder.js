import React, { Component } from 'react'
import { Row, Col } from 'antd'

import OrderForm from './OrderForm'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import getAllList from './utils/getSelectDatas'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      trans:{},
      balans:{}
    }
  }

  componentDidMount() {
    getAllList()
    .then( data => {
      console.log('did')
      console.log(data)
      this.setState={
        trans:data.trans,
        balans:data.balans
      }
    })
  }

  render() {
    return(
      <div>
        <h1>hello {this.state.trans.name}</h1>
        <Header />
        <OrderForm tData={this.state.trans} bData={this.state.balans} />
        <Footer />
    </div>
    )
  }
}
