import React from 'react'
import {Link} from 'react-router-dom'
import DeptForm from './Form'
import {connect} from 'react-redux'
import {startRemoveDept} from '../../actions/departments'
import {startAddDept}  from '../../actions/departments'

class DeptList extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    submit=(formData)=>{
       this.props.dispatch(startAddDept(formData)) 
    }
    remove=(id)=>{
       this.props.dispatch(startRemoveDept(id))
    }
 render(){
     return (
         <div className="row">
<div className="col-md-5 offset-md-3">
            <h2 className="text-center">Listing {this.props.departments.length} departments</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.departments.map((dept)=>{
                            return(
                                <tr key={dept._id}>
                                    <td>{dept.name}</td>
                                    <td><Link to={`/departments/${dept._id}`} className="btn btn-secondary" >Show</Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>{this.remove(dept._id)}}>Remove</button></td>
                                </tr>
                            )
                        })

                    }

                </tbody>

            </table>
            <DeptForm submit={this.submit}/>

        </div>
         </div>
         
     )
 }
}
const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}

export default connect(mapStateToProps)(DeptList)