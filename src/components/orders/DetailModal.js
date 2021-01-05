import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd';


const columns = [
  {
    title: 'User',
    dataIndex: 'u_ismi',
  },
  {
    title: 'Oshxonaga',
    dataIndex: 'baxo_oshxona',
  },
  {
    title: 'Kuryerga',
    dataIndex: 'baho_kuriyer',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];



function DetailModal ( id, orders ) {
    console.log(orders)
    
    return (
        <div>
            <Table columns={columns} dataSource={orders[0]} size="small" />
        </div>
    )
}



export default DetailModal;