import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../../actions/userActions'
import { Table, Tag, Space } from 'antd'
import { Menu } from 'antd'
import { Row, Col } from 'antd'
import { Input } from 'antd'
import { FileExcelOutlined, SearchOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import { Button } from 'antd'
import Map_side from '../orders/Map_side'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

const { Search } = Input
const onSearch = (value) => console.log(value)

const { SubMenu } = Menu

const Index = ({ costum, getOrders }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  //   const [data, setData] = useState([])

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
      dataIndex: 'Id',
      key: 'u_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'User',
      dataIndex: 'u_ismi',
      key: 'user_ism',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Assigned Data',
      dataIndex: 'time_create',
      key: 'assignedData',
    },
    {
      title: 'DeliveryMan',
      dataIndex: 'k_name',
      key: 'k_id',
    },
    {
      title: 'Store',
      dataIndex: 'e_nomi',
      key: 'e_nomi',
    },
    {
      title: 'City',
      dataIndex: 'noData',
      key: 'noData',
    },
    {
      title: 'Status',
      key: 'state',
      dataIndex: 'status',
      render: (text) => {
        let color = text == 1 ? '#16c79a' : '#c70039'
        if (text == 1) {
          return (
            <Tag color={color} key={text}>
              <h5 style={{ color: 'white' }}>Tushdi</h5>
            </Tag>
          )
        } else if (text == 0) {
          return (
            <Tag color={color} key={text}>
              <h5 style={{ color: 'white' }}>Tayyorlanyapti</h5>
            </Tag>
          )
        }
      },
    },
    {
      title: 'Time Elappsed',
      dataIndex: 'noData',
      key: 'noData',
    },
    {
      title: 'City',
      dataIndex: 'noData',
      key: 'noData',
    },
    {
      title: 'Action',
      key: 'action',
      //   render: (text, record) => (
      //     <Space size="middle">
      //       <a>Invite {record.name}</a>
      //       <a>Delete</a>
      //     </Space>
      // ),
    },
  ]

  const Index = { costum, getOrders }

  const routeChange = () => {}
  return (
    <div style={{ width: '100%', padding: '25px' }}>
      <div style={{ width: '100%' }}>
        <Row>
          <Col span={4}>
            <Select defaultValue="lucy" style={{ width: '180px' }} loading>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              style={{ width: '180px' }}
            />
          </Col>
          <Col span={4}>
            <Search
              style={{ width: '180px' }}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col span={4}>
            <Search
              style={{ width: '180px' }}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col span={4}>
            <Button type="primary" danger style={{ width: '180px' }}>
              <FileExcelOutlined />
            </Button>
          </Col>
          <Col span={4}>
            <Button type="primary" danger style={{ width: '180px' }}>
              <SearchOutlined />
            </Button>
          </Col>
        </Row>
        <div style={{ width: '100%', display: 'flex', paddingTop: '15px' }}>
          <div style={{ width: '65%' }}>
            <Table columns={columns} dataSource={costum} size="small" />
          </div>
          <div style={{ width: '35%' }}>
            <Map_side></Map_side>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    costum: state.labbay.orders,
  }
}
export default connect(mapStateToProps, { getOrders })(Index)
