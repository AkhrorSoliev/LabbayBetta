import React from 'react'
import { Table, Row, Col, Timeline } from 'antd'
import Moment from 'react-moment'

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
    render: (text, record) => {
      return <span>{record.miqdori * record.narxi}</span>
    },
  },
]

function OrdersTable({ taom, orders, id }) {
  const order = orders.filter((e) => e.Id == id)
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          backgroundColor: '#e6e6e6',
          padding: '15px',
          boxShadow: ' 5px 2px 3px 1px rgba(0, 0, 0, 0.5)',
        }}
      >
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
              {order[0].time_create == 0 ? null : (
                <Timeline.Item color="green">
                  <div
                    style={{
                      backgroundColor: '#79d70f',
                      padding: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    <h3 style={{ color: 'white', margin: 'auto' }}>
                      Buyurtma vaqti
                    </h3>
                    <h4 style={{ color: 'white', margin: 'auto' }}>
                      <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {order[0].time_create}
                      </Moment>
                    </h4>
                  </div>
                </Timeline.Item>
              )}
              {orders[0].time_create == 0 ? null : (
                <Timeline.Item color="#1b6ca8">
                  <div
                    style={{
                      backgroundColor: '#1b6ca8',
                      padding: '5px',
                      borderRadius: '5px    ',
                    }}
                  >
                    <h3 style={{ color: 'white', margin: 'auto' }}>
                      Oshxona qabul qilish vaqti
                    </h3>
                    <h4 style={{ color: 'white', margin: 'auto' }}>
                      <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {orders[0].time_bolim}
                      </Moment>
                    </h4>
                  </div>
                </Timeline.Item>
              )}
              {orders[0].time_create == 0 ? null : (
                <Timeline.Item color="#ff5200">
                  <div
                    style={{
                      backgroundColor: '#ff5200',
                      padding: '5px',
                      borderRadius: '5px    ',
                    }}
                  >
                    <h3 style={{ color: 'white', margin: 'auto' }}>
                      Tayyor bo'lgan vaqti
                    </h3>
                    <h4 style={{ color: 'white', margin: 'auto' }}>
                      <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {orders[0].time_tayyor}
                      </Moment>
                    </h4>
                  </div>
                </Timeline.Item>
              )}
              {orders[0].time_create == 0 ? null : (
                <Timeline.Item>
                  <div
                    style={{
                      backgroundColor: '#58b4ae',
                      padding: '5px',
                      borderRadius: '5px    ',
                    }}
                  >
                    <h3 style={{ color: 'white', margin: 'auto' }}>
                      Kuryer olgan vaqti
                    </h3>
                    <h4 style={{ color: 'white', margin: 'auto' }}>
                      <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {orders[0].time_kuryer}
                      </Moment>
                    </h4>
                  </div>
                </Timeline.Item>
              )}
              {orders[0].time_create == 0 ? null : (
                <Timeline.Item color="#1b1b2f">
                  <div
                    style={{
                      backgroundColor: '#1b1b2f',
                      padding: '5px',
                      borderRadius: '5px    ',
                    }}
                  >
                    <h3 style={{ color: 'white', margin: 'auto' }}>Finish</h3>
                    <h4 style={{ color: 'white', margin: 'auto' }}>
                      <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {orders[0].time_finish}
                      </Moment>
                    </h4>
                  </div>
                </Timeline.Item>
              )}
            </Timeline>
          </Col>
          <Col span={8} style={{ padding: '0 20px' }}>
            <h2 style={{ backgroundColor: '#cae4db', textAlign: 'center' }}>
              SMTH TABLE😉
            </h2>
            Hozircha bo'sh !
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default OrdersTable
