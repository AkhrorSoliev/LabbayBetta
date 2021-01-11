import React from 'react'
import { Menu, Input } from 'antd'
import {
  CheckOutlined,
  PlusCircleOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons'

const { SubMenu } = Menu

function Items() {
  const handleClick = (e) => {
    console.log('click ', e)
  }

  return (
    <div style={{ boxShadow: '2px 2px 10px 1px rgba(0, 0, 255, .2)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: '#e6e6e6',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: '0' }}>Item</p>
        <CheckOutlined
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '10px',
          alignItems: 'center',
        }}
      >
        <Input placeholder="Ovqat nomi" style={{ width: '50%' }} />
        <Input placeholder="Miqdori" style={{ width: '30%' }} />
        <PlusCircleTwoTone style={{ fontSize: 25, cursor: 'pointer' }} />
      </div>

      <Menu
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </Menu>
    </div>
  )
}

export default Items
