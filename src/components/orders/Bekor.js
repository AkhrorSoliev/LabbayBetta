import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getOrders, getTaom, getKur } from '../../actions/userActions'
import { FileExcelOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Button,
  Modal,
  Select,
  Input,
  Row,
  Col,
  Table,
  Tag,
  Space,
  Menu,
  Spin,
} from 'antd'
import Map_side from '../orders/Map_side'
import OrdersTable from './OrdersTable'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

const { Search } = Input
const onSearch = (value) => console.log(value)

const { SubMenu } = Menu

const Index = ({ costum, getOrders, taom, getTaom, getKur }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [id, setId] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => {
    getKur()
  }, [])
  const showModal = () => {
    getTaom(id)
    setIsModalVisible(true)
  }
  const onClickRow = (record) => {
    return {
      onClick: () => {
        setId(record.Id)
        console.log('salom')
      },
    }
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    getOrders()
  }, [])
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'u_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'User ID',
      dataIndex: 'userid',
      key: 'user_ism',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Berkor qilgan',
      dataIndex: 'bekor_qilingan',
      key: 'assignedData',
    },
    {
      title: 'Narxi',
      dataIndex: 'narxi',
      key: 'narxi',
    },
    {
      title: 'Vaqti',
      dataIndex: 'vaqti',
      key: 'vaqti',
    },
    {
      title: 'Bekor qilish sababi',
      dataIndex: 'noData',
      key: 'noData',
    },
  ]

  const Index = { costum, getOrders }

  const routeChange = () => {}

  const setRowClassName = (record) => {
    return record.id === id ? 'clickRowStyl' : 'rowCursor'
  }

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
        <Row>
          <Col span={4}>
            <h4 style={{ margin: '0 auto' }}>Qidirish</h4>
            <Select defaultValue="lucy" style={{ width: '180px' }} loading>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
          <Col span={4}>
            <h4 style={{ margin: '0 auto', visibility: 'hidden' }}>.</h4>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              style={{ width: '180px' }}
            />
          </Col>
          <Col span={4}>
            <h4 style={{ margin: '0 auto' }}>Statys</h4>
            <Select defaultValue="lucy" style={{ width: '180px' }} loading>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
          <Col span={4}>
            <h4 style={{ margin: '0 auto', visibility: 'hidden' }}>.</h4>
            <Search
              style={{ width: '180px' }}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col span={4}>
            <h4 style={{ margin: '0 auto', visibility: 'hidden' }}>.</h4>
            <Button type="primary" danger style={{ width: '180px' }}>
              Apply
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ width: '100%', display: 'flex', paddingTop: '15px' }}>
        <div style={{ width: '98%' }}>
          <Table
            columns={columns}
            dataSource={costum}
            size="small"
            onRow={onClickRow}
            rowClassName={setRowClassName}
          />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    costum: state.labbay.orders,
    taom: state.labbay.taom,
  }
}
export default connect(mapStateToProps, { getOrders, getTaom, getKur })(Index)
