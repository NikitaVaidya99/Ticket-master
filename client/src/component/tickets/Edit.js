import React from 'react'
import TicketForm from './Form'
import { connect } from 'react-redux'
import {startEditTicket} from '../../actions/tickets'

function TicketEdit(props){
    const submit=(formData)=>{
        props.dispatch(startEditTicket(formData, props))
    }
   
        return (
            <div>
                <h3 className="text-center">Edit the ticket</h3>
                {
                    (Object.keys(props.ticket).length!=0) && <TicketForm {...props.ticket} submit={submit}/>
                }
            </div>
        )
}
const mapStateToProps=(state, props)=>{
    return {
        ticket:state.tickets.find(t=>t._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(TicketEdit)