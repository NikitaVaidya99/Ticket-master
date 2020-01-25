import React from 'react'
import { Jumbotron } from 'reactstrap'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'


function EmployeeShow(props){
         const {name, email, mobile, department}=props.employee
        return(
            <div className="row">      
            <div className="col-md-5 offset-md-3">

            {(!_.isEmpty(props.employee)) && 
                <div>
                <br/><br/>

                <Jumbotron style={{"backgroundColor":"rgba(0,0,0,0.2)"}}>
                <h1 className="display-3">{name}</h1>
                <h4>Email- {email}</h4>
                <h4>Mobile- {mobile}</h4>
                <h4>Department- {department.name}</h4>
                <Link className="btn btn-warning" to={`/employees/edit/${props.employee._id}`}>Edit</Link>&nbsp;
                <Link className="btn btn-secondary" to='/employees'>Back</Link> 
                </Jumbotron>

                {/* <h4>Name- {name}</h4>
                    <h4>Email- {email}</h4>
                    <h4>Mobile- {mobile}</h4>
                    <h4>Department- {department.name}</h4>
                    <Link className="btn btn-warning" to={`/employees/edit/${props.employee._id}`}>Edit</Link>&nbsp;
                    <Link className="btn btn-secondary" to='/employees'>Back</Link> */}
                </div>
              
            }
           
            </div> 
            </div>
        )
}

const mapStateToProps=(state, props)=>{
    // console.log('id',props.match.params.id)
    // console.log('emp',state.employees)
    return {
        employee:state.employees.find(e=>(e._id)===props.match.params.id)
    }
}

export default connect(mapStateToProps)(EmployeeShow)