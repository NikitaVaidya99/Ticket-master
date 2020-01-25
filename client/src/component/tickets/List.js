import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {startRemoveTicket} from '../../actions/tickets'
import {startChangeCheckboxTicket} from '../../actions/tickets'
import Charts from './chart'

class TicketList extends React.Component{
    remove=(id)=>{
       this.props.dispatch(startRemoveTicket(id))
    }
    empNames=(emp)=>{
        const e=emp.map(e=>e.name)
        return e.join()
    }
    changeChecked=(id)=>{
        const formData={
            "isResolved":true
        }
       this.props.dispatch(startChangeCheckboxTicket(id, formData, this.props))
    }
    render(){
    return(
        <div>
             <br/>
             <Nav tabs>
                <NavItem>
                <NavLink href="/tickets">Pending</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/completedTickets">Completed</NavLink>
                </NavItem>
            </Nav>


           <br/><br/>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>CodeNo</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employees</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Complete</th>
                        <th colSpan='2'>Actions</th>
                    </tr>
                </thead>
               <tbody>
                   {
                       this.props.tickets.map((ticket)=>{
                           if(ticket.isResolved==false){
                            return (
                                <tr key={ticket._id}>
                                <td>{ticket.code}</td>
                                <td>{ticket.customer.name}</td>
                                <td>{ticket.department.name}</td>
                               {!_.isEmpty(ticket.employee)?<td>{this.empNames(ticket.employee)}</td>: <td>-</td>}
                                <td>{ticket.message}</td>
                                <td>{ticket.priority}</td>
                                <td><input type="checkbox" onChange={()=>this.changeChecked(ticket._id)}/> </td>
                                <td><Link className="btn btn-secondary" to={`/tickets/${ticket._id}`}>show</Link></td>
                                <td><button className="btn btn-danger" onClick={()=>{this.remove(ticket._id)}}>remove</button></td> 
                            </tr>
                        )
                           }
                           else{
                               return (
                                <React.Fragment key={ticket._id}></React.Fragment>
                               )
                           }
                          
                       })
                   }
               </tbody>

                </table>
                <Link className="btn btn-primary" to='/tickets/new'>Add Ticket</Link>

                <Charts/>
        </div>
    )
}
}
const mapStateToProps=(state, props)=>{
    return {
        tickets:state.tickets,
        customers:state.customers,
        employees:state.employees,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(TicketList)