import React, { Component } from 'react'
import { Table, Button, Select, Row, Col, Input, Tabs } from 'antd'
import { FileExcelOutlined } from '@ant-design/icons'
import StoriesInfo from './StoriesInfo'
import reqwest from 'reqwest'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const { Search } = Input
const onSearch = (value) => console.log(value)

const { Option } = Select

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
})

class StoriesTab extends Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  }

  componentDidMount() {
    const { pagination } = this.state
    this.fetch({ pagination })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    })
  }

  fetch = (params = {}) => {
    this.setState({ loading: true })
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: getRandomuserParams(params),
    }).then((data) => {
      console.log(data)
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      })
    })
  }
  render() {
    const { data, pagination, loading } = this.state
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
              <p style={{ margin: '0 auto' }}>Max Buyurtma</p>
              <Input style={{ width: '180px' }} />
            </Col>
            <Col span={4}>
              <p style={{ margin: '0 auto' }}>Min Buyurtma</p>
              <Input style={{ width: '180px' }} />
            </Col>
            <Col span={8}>
              <p style={{ margin: '0 auto', marginLeft: '12px' }}>Qidirish</p>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Select defaultValue="lucy" style={{ width: '180px' }} loading>
                  <Option value="lucy">Lucy</Option>
                </Select>
                <Search
                  style={{ width: '180px' }}
                  placeholder="input search text"
                  onSearch={onSearch}
                  enterButton
                />
              </div>
            </Col>
            <Col span={8}>
              <p style={{ margin: '0 auto', marginLeft: '12px' }}>
                No. of Record
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Input style={{ width: '180px' }} />
                <Button type="primary" danger style={{ width: '180px' }}>
                  <FileExcelOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            paddingTop: '5px',
          }}
        >
          <div style={{ width: '65%', padding: '5px' }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Oshxonalar" key="1">
                <Table
                  columns={columns}
                  rowKey={(record) => record.login.uuid}
                  dataSource={data}
                  pagination={pagination}
                  loading={loading}
                  onChange={this.handleTableChange}
                />
              </TabPane>
              <TabPane tab="Tasdiqlanmaganlar" key="2">
                <div style={{ width: '65%' }}>
                  <Table
                    columns={columns}
                    rowKey={(record) => record.login.uuid}
                    dataSource={data}
                    pagination={pagination}
                    loading={loading}
                    onChange={this.handleTableChange}
                  />
                </div>
              </TabPane>
              <TabPane tab="Ishni yakunlaganlar" key="3">
                <div style={{ width: '65%' }}>
                  <Table
                    columns={columns}
                    rowKey={(record) => record.login.uuid}
                    dataSource={data}
                    pagination={pagination}
                    loading={loading}
                    onChange={this.handleTableChange}
                  />
                </div>
              </TabPane>
            </Tabs>
          </div>
          <div style={{ width: '35%', marginTop: '50px', marginLeft: '5px' }}>
            <StoriesInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default StoriesTab
