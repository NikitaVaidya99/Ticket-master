import React from 'react'
import {connect} from 'react-redux'
import {startLogout} from '../../actions/users'

function Logout(props){
    props.dispatch(startLogout(props))
    return (
        <div></div>
    )
}
export default connect()(Logout)