import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import {Modal, ModalBody, ModalFooter, ModalHeader,Button, Jumbotron} from 'reactstrap'
function DeptShow(props){
    console.log('emp', props.id)
    return (
        <div className="row">
        <div className="col-md-5 offset-md-3">
        {/* <h4>hi {props.match.params.id}</h4> */}
        <br/>
        <Jumbotron style={{"backgroundColor":"rgba(0,0,0,0.2)"}}>
        {
            (props.employees.length>0) && props.employees.map((e)=>
              { 
                  return <h6>{e.name}</h6>

            })
        }
         <Link to={`/departments`} className="btn btn-warning">Add more Departments</Link>&nbsp;
        <Link to='/employees' className="btn btn-dark">Add  more employees</Link>
            </Jumbotron>
        </div>
                
                </div>)
    
}

const mapStateToProps=(state, props)=>{
    // console.log('emp', state.employees, props.match.params.id)
    return {
        employees:state.employees.filter(e=>e.department._id==props.match.params.id)


    }
}
export default connect(mapStateToProps)(DeptShow)