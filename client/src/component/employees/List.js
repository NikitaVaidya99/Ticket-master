import React from 'react'
import {Link} from 'react-router-dom'
import {startRemoveEmp} from '../../actions/employees'
import {connect} from 'react-redux'

class EmployeesList extends React.Component{
    remove=(id)=>{
       this.props.dispatch(startRemoveEmp(id))
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Employees ({this.props.employees.length})</h2> 
               <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>department</th>
                            <th>Mobile</th>
                            <th colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employees.map((employee)=>{
                                return (
                                    <tr key={employee._id}>
                                    <td><Link to={`/employees/${employee._id}`}>{employee.name}</Link></td>
                                    <td>{employee.email}</td>
                                    <td>{employee.department?employee.department.name : ""}</td>
                                    <td>{employee.mobile}</td>
                                    <td><Link className="btn btn-secondary" to={`/employees/${employee._id}`}>show</Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>{this.remove(employee._id)}}>Remove</button></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                    </table>
                    <Link className="btn btn-primary" to='/employees/New'>Add Employee</Link>
                </div>
              
                   
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        employees:state.employees
    }
}
export default connect(mapStateToProps)(EmployeesList)