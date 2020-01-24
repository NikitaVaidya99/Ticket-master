import React from 'react'
import EmployeeForm from './Form'
import axios from '../../config/axios'
import {startUpdateEmp} from '../../actions/employees'
import {connect} from 'react-redux'
class EmployeeEdit extends React.Component{
constructor(props){
    super(props)
    this.state={
        employee:{}
    }
}

submit=(formData)=>{
   this.props.dispatch(startUpdateEmp(formData, this.props))
}


render(){
    return(
        <div>
           {(Object.keys(this.props.employee).length!==0) &&  
           <EmployeeForm {...this.props.employee} submit={this.submit}/>}
        </div>
    )
}
}
const mapStateToProps=(state, props)=>{
    return {
        employee:state.employees.find(e=>e._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(EmployeeEdit)