import React, { Component } from 'react'
import {
  BellOutlined,
  MailOutlined,
  PlusOutlined,
  StopOutlined,
  SwapRightOutlined,
  YuqueOutlined,
} from '@ant-design/icons'
import { Card, Avatar, Button, Tabs } from 'antd'
import Person from '../person.svg'
import CurierInfoTab from './CurierInfoTab'
const { Meta } = Card

const { TabPane } = Tabs

class CuriersInfo extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: 400 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: '100px', height: '100px', marginLeft: 120 }}
                src={Person}
              />
            }
          />
          <br></br>
          <div
            style={{
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <h2>
              Doniyor<span>⭐5</span>
            </h2>
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Button style={{ width: '80px', backgroundColor: '#899857' }}>
              <PlusOutlined style={{ color: 'white' }} />
            </Button>
            <Button style={{ width: '80px', backgroundColor: '#899857' }}>
              <MailOutlined style={{ color: 'white' }} />
            </Button>
            <Button style={{ width: '80px', backgroundColor: '#899857' }}>
              <BellOutlined style={{ color: 'white' }} />
            </Button>
            <Button style={{ width: '80px', backgroundColor: '#899857' }}>
              <StopOutlined style={{ color: 'white' }} />
            </Button>
          </div>
          <br />
          <div>
            <CurierInfoTab />
          </div>
        </Card>
      </div>
    )
  }
}

export default CuriersInfo
