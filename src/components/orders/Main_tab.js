import React from 'react'
import Sec_Tab from './Sec_Tab'
import { connect } from 'react-redux'

function FullWidthTabs() {
  return (
    <div>
      <Sec_Tab></Sec_Tab>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    counts: state.labbay.counts,
  }
}
export default connect(mapStateToProps, {})(FullWidthTabs)
