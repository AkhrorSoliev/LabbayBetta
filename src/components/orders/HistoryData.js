import React, { useState } from 'react'
import { connect } from 'react-redux'
import GetLocation from './getLocation'
// import Phone from '../telephone.svg'
import { Card, Button, Modal } from 'antd'
import Location from '../placeholder.svg'
import { UserOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons'
import DetailModal from './DetailModal'

function HistoryData({ id, orders }) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const order = orders.filter((e) => e.Id == id)
  return (
    <div
      style={{
        backgroundColor: '#e8e8e8',
        padding: '5px',
        boxShadow: 'rgba(0, 0, 255, 0.2) 2px 2px 10px 1px',
      }}
    >
      <Card
        size="small"
        title={
          <h3
            style={{
              backgroundColor: '#30475e',
              color: 'white',
              textAlign: 'center',
              borderRadius: '5px',
            }}
          >
            Buyurtma beruvchi{' '}
          </h3>
        }
        style={{ width: '100%' }}
      >
        {' '}
        <Button type="primary" onClick={showModal} style={{ float: 'right' }}>
          <a href="#" style={{ color: 'white' }}>
            Ko'rish
          </a>
        </Button>
        <div style={{ margin: '10px' }}>
          <h3>
            {' '}
            <UserOutlined style={{ marginRight: '15px' }} />
            {order[0].u_ismi}
          </h3>
          <h3>
            {' '}
            <PhoneOutlined style={{ marginRight: '15px' }} />
            {order[0].u_tel}
          </h3>
        </div>
      </Card>
      <Card
        size="small"
        title={
          <h3
            style={{
              backgroundColor: '#30475e',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Buyurtmani qanbul qiluvchi
          </h3>
        }
        style={{ width: '100%' }}
      >
        <div style={{ margin: '10px' }}>
          <h3 style={{ margin: 'auto' }}>
            {' '}
            <HomeOutlined style={{ marginRight: '15px' }} />
            {order[0].e_nomi}
          </h3>
          <h3 style={{ margin: 'auto' }}>
            <PhoneOutlined style={{ marginRight: '15px' }} />
            {order[0].u_tel}
          </h3>
          <h3 style={{ margin: 'auto' }}>
            {
              <h4
                style={{
                  color: 'black',
                  display: 'flex',
                  aliginItem: 'center',
                }}
              >
                <img
                  src={Location}
                  alt="Location"
                  style={{ width: '20px', height: '20px', marginRight: '15px' }}
                />
                <GetLocation lat={order[0].e_lat} lng={order[0].e_lan} />
              </h4>
            }
          </h3>
        </div>
      </Card>
      <Card
        size="small"
        title={
          <h3
            style={{
              backgroundColor: '#30475e',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Yetqazib berivuchi
          </h3>
        }
        style={{ width: '100%' }}
      >
        <div style={{ margin: '10px' }}>
          <h3 style={{ margin: 'auto' }}>
            {' '}
            <UserOutlined style={{ marginRight: '15px' }} />
            {order[0].k_soname}
          </h3>
          <h3 style={{ margin: 'auto' }}>
            {' '}
            <PhoneOutlined style={{ marginRight: '15px' }} /> {order[0].k_tel}
          </h3>
        </div>
      </Card>
      <Card
        size="small"
        title={
          <h3
            style={{
              backgroundColor: '#30475e',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Qabul qiluvchi
          </h3>
        }
        style={{ width: '100%' }}
      >
        <div style={{ margin: '10px' }}>
          <h3 style={{ margin: 'auto' }}>
            {' '}
            <UserOutlined style={{ marginRight: '15px' }} /> {order[0].u_ismi}
          </h3>
          <h3 style={{ margin: 'auto' }}>
            {' '}
            <PhoneOutlined style={{ marginRight: '15px' }} /> {order[0].u_tel}
          </h3>
        </div>
      </Card>
      <Modal
        title="Baholash jadvali"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {order ? <DetailModal orders={order} /> : null}
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orders: state.labbay.orders,
  }
}

export default connect(mapStateToProps)(HistoryData)
