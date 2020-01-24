import React from 'react'
import {connect} from 'react-redux'

import EmployeeForm from './Form'
import {startAddEmployee} from '../../actions/employees'

class EmployeeNew extends React.Component{
    
    submit=(formData)=>{
        this.props.dispatch(startAddEmployee(formData, this.props))
    }

    render(){
        return(
            <div>
                <EmployeeForm submit={this.submit}/>  
            </div>
        )
    }
}
export default connect()(EmployeeNew)