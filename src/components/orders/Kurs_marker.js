import React,{Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import parse from 'html-react-parser';
import { Tooltip } from 'antd';

const AnyReactComponent = ({ text }) => <Tooltip title={parse("prompt text<a href='tel:998903034676'>tel qil</a>")}>
<span style={{cursor:"pointer"}}><img style={{transform:`rotate(210deg)`}} src='/kur.svg' width="30px"></img></span>
</Tooltip>;
const Kurs_marker = ({kurs}) => {
    useEffect(() => {
        
        
    }, [kurs])
    return (
        <Fragment> 
            {kurs.length > 0 ? kurs.map(k => <AnyReactComponent 
                         lat={k.lat} lng={k.lan}></AnyReactComponent>): null}
        </Fragment> 
    )
}
const mapStateToProps = state =>{
    return {
        kurs: state.labbay.kurs
    }
}
export default connect(mapStateToProps)(Kurs_marker)
