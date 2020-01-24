import React from 'react'
// import axios from '../../config/axios'
import {connect} from 'react-redux'
import CustomerForm from './Form'

import { startAddCustomer } from "../../actions/customers";

function CustomerNew(props){
    const submit=(formData)=>{
        props.dispatch(startAddCustomer(formData, props))
    }

        return(
            <div>
                <h2 align="center">Fill the Details</h2>
                <CustomerForm submit={submit}/>
                
            </div>
        )
    }
    
export default connect()(CustomerNew)