import React from 'react'
import TicketForm from './Form'
import {startAddTicket} from '../../actions/tickets'
import {connect} from 'react-redux'

function TicketNew(props){
   const submit=(formData)=>{
       props.dispatch(startAddTicket(formData, props))

    }
    return(
        <div>
            <h3 className="text-center">Add a ticket</h3>
            <TicketForm submit={submit}/>
        </div>
    )

}
export default connect()(TicketNew)