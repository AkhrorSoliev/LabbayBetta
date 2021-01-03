import React from 'react'
import { Table, Row, Col, Timeline } from 'antd'

const columns = [
  {
    title: 'Taom Nomi',
    dataIndex: 'nomi',
    key: 'nomi',
  },
  {
    title: 'Spec.Price',
    dataIndex: 'noData',
    key: 'noData',
  },
  {
    title: 'Narxi',
    dataIndex: 'narxi',
    key: 'narxi',
  },
  {
    title: 'Miqdori',
    dataIndex: 'miqdori',
    key: 'miqdori',
  },
  {
    title: 'Jami',
    dataIndex: 'noData',
    key: 'noData',
  },
]

function OrdersTable({ taom, Id }) {
  return (
    <div>
      <Row style={{ margin: '10px' }}>
        <Col span={8} style={{ padding: '0 20px' }}>
          <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>
            ORDERS DETAILS
          </h2>
          <Table columns={columns} dataSource={taom} size="small" />
        </Col>
        <Col span={8} style={{ padding: '0 20px' }}>
          <div>
            <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>
              ORDERS STATUS
            </h2>
          </div>
          <Timeline>
            <Timeline.Item color="green">Hell\</Timeline.Item>
            <Timeline.Item color="green">Hello2</Timeline.Item>
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
          <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>
            SMTH TABLE😉
          </h2>
          Hozircha bo'sh !
        </Col>
      </Row>
    </div>
  )
}

export default OrdersTable
