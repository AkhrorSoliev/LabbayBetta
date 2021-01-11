import React from 'react'
import { Tabs, Switch } from 'antd'

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

function UsersInfoTab() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tafsilotlar" key="1">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '5px',
            }}
          >
            <h4>Phone verified</h4>
            <h4>ios • 1.2.6</h4>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '5px',
            }}
          >
            <h4>Regestration date</h4>
            <h4>29 Dec 2020 01:13PM</h4>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '5px',
            }}
          >
            <h4>Phone verified</h4>
            <Switch
              defaultChecked
              onChange={onChange}
              style={{ float: 'right' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '5px',
            }}
          >
            <h4>Document Upload</h4>
            <Switch
              defaultChecked
              onChange={onChange}
              style={{ float: 'right' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '5px',
            }}
          >
            <h4>Use Wallet</h4>
            <Switch
              defaultChecked
              onChange={onChange}
              style={{ float: 'right' }}
            />
          </div>
        </TabPane>
        <TabPane tab="Malumotlar" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Yo'llanma" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Sharh" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tarixi" key="5">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}

export default UsersInfoTab
