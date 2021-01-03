import React from 'react'
import { Table, Row, Col, Timeline } from 'antd'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
]
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
]

function OrdersTable() {
    return (
        <div>
            <Row style={{ margin: '10px' }}>
                <Col span={8} style={{ padding: '0 20px' }}>
                    <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>ORDERS DETAILS</h2>
                    <Table columns={columns} dataSource={data} size="small" />
                </Col>
                <Col span={8} style={{ padding: '0 20px' }}>
                    <div>
                        <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>ORDERS STATUS</h2>
                    </div>
                    <Timeline>
                        <Timeline.Item color="green">
                            Create a services site 2015-09-01
            </Timeline.Item>
                        <Timeline.Item color="green">
                            Create a services site 2015-09-01
            </Timeline.Item>
                        <Timeline.Item color="red">
                            <p>Solve initial network problems 1</p>
                            <p>Solve initial network problems 2</p>
                            <p>Solve initial network problems 3 2015-09-01</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                        </Timeline.Item>
                    </Timeline>
          ,
        </Col>
                <Col span={8} style={{ padding: '0 20px' }}>
                    <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>SMTH TABLE😉</h2>Hozircha bo'sh !</Col>
            </Row>
        </div>
    )
}

export default OrdersTable
