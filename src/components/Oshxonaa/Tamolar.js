import React from 'react'
import { Menu, Input, Image, Switch } from 'antd'
import {
  CheckOutlined,
  PlusCircleOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { TextArea } = Input

function Category() {
  const handleClick = (e) => {
    console.log('click ', e)
  }

  function onChange(checked) {
    console.log(`switch to ${checked}`)
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
        <p style={{ margin: '0' }}>OSh</p>
        <CheckOutlined
          style={{
            cursor: 'pointer',
          }}
        />
      </div>
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <Image
          width={100}
          height={100}
          src="error"
          fallback="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
        />
      </div>
      <div style={{ padding: '15px' }}>
        <div
          style={{
            width: '100%',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <div style={{ width: '30%' }}>
            <p style={{ margin: '5px' }}>Ovqat nomi</p>
            <Input placeholder="Ovqat nomi" />
          </div>
          <div style={{ width: '20%' }}>
            <p style={{ margin: '5px' }}>Ovqat narxi</p>
            <Input placeholder="Ovqat narxi" />
          </div>
          <div style={{ width: '20%' }}>
            <p style={{ margin: '5px' }}>VAT(%)</p>
            <Input placeholder="VAT(%)" />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <br />
          <p style={{ float: 'left', margin: '5px' }}>Ta'rifi</p>
          <TextArea rows={2} style={{ width: '100%' }} />
        </div>
        <p style={{ visibility: 'hidden', margin: '' }}>.</p>
        <div style={{ display: 'flex', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '50%',
            }}
          >
            <p>Storeda ko'rsatish</p>
            <Switch defaultChecked onChange={onChange} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '50%',
            }}
          >
            <p>Item qatorda ko'rstatish</p>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <div style={{}}>
            <p>Modifier qo'shish</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Input
                placeholder="Categoriyani kiriting"
                style={{ width: '60%' }}
              />
              <PlusCircleTwoTone style={{ fontSize: 25, cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
