import React from 'react'
import { Table, Icon } from 'antd';

const DataTable = ({ data, columns, states }) => {
  return (
  <Table footer={states} dataSource={data} columns={columns} />
  )
}

export default DataTable
