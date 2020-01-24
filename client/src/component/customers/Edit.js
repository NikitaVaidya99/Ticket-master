import React from 'react'
import CustomerForm from './Form'
//import axios from '../../config/axios'
import {connect} from 'react-redux'
import {startEditCustomer} from '../../actions/customers'

class CustomerEdit extends React.Component{
    submit=(formData)=>{
       this.props.dispatch(startEditCustomer(formData, this.props)) 
    }
render(){
    return(
        <div>
           
            <h2 align="center">Edit the customer information</h2>
            {(Object.keys(this.props.customer).length!==0) && <CustomerForm {...this.props.customer} submit={this.submit}/>}
           
        </div>
    )
}
}
const mapStateToProps=(state, props)=>{
    return {
        customer:state.customers.find(c=>c._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(CustomerEdit)