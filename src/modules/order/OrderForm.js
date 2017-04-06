import React, { Component } from 'react'
import {
  Form, Select, Input, InputNumber, Switch, Radio,
  Slider, Button, Upload, Tooltip, Icon, Collapse, Layout, Row, Col, DatePicker  } from 'antd';
const Panel = Collapse.Panel;

import './orderform.css'
import MyUpload from '../../components/upload/upload'
import DataTable from './table'
// import ColPanel from '../../../components/panel'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;

//表格用数据
const tableRowNum = 10;

const dataTable = [{
  key: '1',
  cproductidcode: 'John Brown',
  cproductidname: 32,
  materialspec: 'New York No. 1 Lake Park',
  nqtorigtaxnetprc:'¥240',
  nodunitnum: 'John Brown',
  nqtunitnum: 32,
  nnabnum: 'New York No. 1 Lake Park',
  norigtaxmny:'¥240',
}, {
  key: '2',
  cproductidcode: 'Jim Green',
  cproductidname: 42,
  materialspec: 'London No. 1 Lake Park',
  nqtorigtaxnetprc:'¥240',
  nodunitnum: 'John Brown',
  nqtunitnum: 32,
  nnabnum: 'New York No. 1 Lake Park',
  norigtaxmny:'¥240',
}, {
  key: '3',
  cproductidcode: 'Joe Black',
  cproductidname: 32,
  materialspec: 'Sidney No. 1 Lake Park',
  nqtorigtaxnetprc:'¥240',
  nodunitnum: 'John Brown',
  nqtunitnum: 32,
  nnabnum: 'New York No. 1 Lake Park',
  norigtaxmny:'¥240',
}];
let dataLen = dataTable.length
const columns = [{
  title: '商品编码',
  dataIndex: 'cproductidcode',
  key: 'cproductidcode',
  render: text => <a href="#">{text}</a>,
}, {
  title: '商品名称',
  dataIndex: 'cproductidname',
  key: 'cproductidname',
}, {
  title: '规格',
  dataIndex: 'materialspec',
  key: 'materialspec',
},{
  title:'价格',
  dataIndex:'nqtorigtaxnetprc',
  key:'nqtorigtaxnetprc'
},{
  title:'订货数量',
  dataIndex:'nodunitnum',
  key:'nodunitnum'
},{
  title:'报价数量',
  dataIndex:'nqtunitnum',
  key:'nqtunitnum'
},{
  title:'库存',
  dataIndex:'nnabnum',
  key:'nnabnum'
},{
  title:'金额',
  dataIndex:'norigtaxmny',
  key:'norigtaxmny'
}, {
  title: '操作',
  key: 'action',
  render: (text, record, dataIndex) => (
    <span>
      <a href="#">删除 {dataIndex}</a>
    </span>
  ),
}];
const Search = Input.Search;
const footer = () => {
  return (
    <div>
    <Row>
    <Col span={18}>
    <Search
    placeholder="输入商品名称 / 编码"
     name="add_input_name"
    style={{ width: 200 }}
    onSearch={value => console.log(value)}
  />
    <InputNumber min={1} max={10} defaultValue={3} />
    {/* <Button type="primary" icon="plus-square-o" size="default">Download</Button>
    <Button type="primary" icon="shopping-cart" size="default">从购物车选</Button>
    <Button type="primary" icon="star-o"  size="default">从收藏夹选</Button>*/}
    <ButtonGroup>
     <Button icon="shopping-cart" />
     <Button icon="star-o" />
   </ButtonGroup>
  </Col>
  <Col span={3}>
      <div>合计：<span>¥1200.00</span></div>
  </Col>
  <Col span={3}>
    <a href="#">清空</a>
  </Col>
    </Row>
    <Row>
    <Col span={18}><a href="#"><Icon type="plus" /><span>新增收货信息</span></a></Col>
    </Row>
    </div>
  )
};

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 2},
      wrapperCol: { span: 6 },
    };
    console.log(this.props)
    return (
      <div>
      <Row type="flex" justify="center">
      <Col span={18}  className="orderform">
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="销售组织："
        >
          <span className="ant-form-text">长沙分公司</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="客户："
        >
          <span className="ant-form-text">达利园</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="运输方式： "
          hasFeedback
        >
          {getFieldDecorator('ctransporttypeid', {
            rules: [
              { required: true, message: '请选择运输方式!' },
            ],
          })(
            <Select placeholder="请选择运输方式">
              <Option value="0001XX10000000000D15">铁路运输</Option>
              <Option value="0001XX10000000000D16">公路运输</Option>
              <Option value="0001XX10000000000D17">航空运输</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="结算方式： "
          hasFeedback
        >
          {getFieldDecorator('cbalancetypeid', {
            rules: [
              { required: true, message: '请选择运结算方式!' },
            ],
          })(
            <Select placeholder="请选择结算方式">
              <Option value="0001Z0100000000000XZ">现金</Option>
              <Option value="0001Z0100000000000Y0">现金支票</Option>
              <Option value="0001Z0100000000000Y1">转账支票</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
         {...formItemLayout}
         label="发票抬头： "
         hasFeedback
       >
         {getFieldDecorator('vinvoicename', {
           rules: [{ required: true, message: '请输入发票抬头!', whitespace: true }],
         })(
           <Input />
         )}
       </FormItem>
       <FormItem
        {...formItemLayout}
        label="备注： "
        hasFeedback
      >
        {getFieldDecorator('vinvoicename', {
          rules: [{ required: true, message: '请输入备注!', whitespace: true }],
        })(
          <Input />
        )}
      </FormItem>
      <Row>
      <Col span={2}>
        <label>上传附件：</label>
      </Col>
      <Col span={6}>
        <MyUpload />
      </Col>
      </Row>
      <Collapse bordered={top} defaultActiveKey={['1']}>
        <Panel header="收货信息1" key="1">
        <Row>
          <Col span={10}>
          <FormItem
           labelCol={{ span: 4}}
           wrapperCol={{ span: 15 }}
           label="收获地址： "
           hasFeedback
         >
           {getFieldDecorator('creceiveaddrid_name', {
             rules: [{ required: true, message: '', whitespace: true }],
           })(
             <Input />
           )}
         </FormItem>
         </Col>
         <Col span={6}><a href="#"><Icon type="plus" /><span>添加收货地址</span></a></Col>
         </Row>
         <FormItem
          {...formItemLayout}
          label="收获地区： "
          hasFeedback
        >
          {getFieldDecorator('creceiveareaid_name', {
            rules: [
              { required: true, message: '请选择收获地区!' },
            ],
          })(
            <Select placeholder="请选择收获地区">
              <Option value="请选择">请选择</Option>
              <Option value="1001XX100000000002MR">华北</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="期望到货日期："
        >
          {getFieldDecorator('dreceivedate', {
            rules: [{ type: 'object', required: true, message: '请选择日期!' }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="商品清单："
        >
          <span className="ant-form-text">3</span>
        </FormItem>
        <DataTable states={footer} data={dataTable} columns={columns} />
      </Panel>
      </Collapse>
      <Row>
        <Col span={6}>
          <FormItem
            {...formItemLayout}
            label="商品总清单（种）："
            labelCol={{span:12}}
          >
            <span className="ant-form-text">3</span>
          </FormItem>
        </Col>
        <Col span={6} offset={4}>
          <FormItem
            {...formItemLayout}
            label="合计金额："
            labelCol={{span:12}}
          >
            <span className="ant-form-text">￥4200.00</span>
          </FormItem>
        </Col>
        <Col span={8} style={{textAlign:'right'}}>
          <FormItem
              wrapperCol={{ span: 18, offset: 1 }}
            >
            <Button type="primary" htmlType="submit" >暂存</Button>
            <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit">确定</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>取消</Button>
          </FormItem>
        </Col>
      </Row>
      </Form>
      </Col>
      </Row>
      </div>
    );
  }
}

const OrderForm = Form.create()(Demo);

export default OrderForm

// ReactDOM.render(<FormLayoutDemo />, mountNode);
