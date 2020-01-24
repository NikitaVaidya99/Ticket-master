import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

function TicketShow(props){
       console.log('ticket', props.ticket)
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                 <h2 className="text-center">Showing ticket</h2>
                 { !_.isEmpty(props.ticket)
                 &&
                 <ul className="list-group"> 
                 <li className="list-group-item">code- {props.ticket.code}</li>
                 <li className="list-group-item">customer- {props.ticket.customer.name}</li>
                 <li className="list-group-item">department-{props.ticket.department.name}</li>
                 <li className="list-group-item">priority- {props.ticket.priority}</li>
                 <li className="list-group-item">message- {props.ticket.message}</li>
                 <li className="list-group-item">isResolved- {props.ticket.isResolved+''}</li>
                </ul> }
                <Link className="btn btn-warning" to={`/tickets/edit/${props.ticket._id}`}>Edit</Link>&nbsp;
                <Link className="btn btn-secondary" to='/tickets'>back </Link>
            </div>
            </div>
           
        )
    }
    
    const mapStateToProps=(state, props)=>{
        return {
            customers:state.customers,
            departments:state.departments,
            ticket:state.tickets.find(t=>t._id==props.match.params.id)
        }
    }

export default connect(mapStateToProps)(TicketShow)