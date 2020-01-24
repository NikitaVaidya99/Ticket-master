import axios from '../config/axios'
import swal from 'sweetalert'

//--------------listing--------------
export const setTickets=(tickets)=>{
    return {
        type:'SET_TICKETS',
        payload:tickets
    }
}

export const startSetTickets=()=>{
    return (dispatch)=>{
        axios.get('/tickets', {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const tickets=response.data
           dispatch(setTickets(tickets))
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//--------------add--------------------
export const addTicket=(ticket)=>{
    return {
        type:'ADD_TICKET',
        payload:ticket
    }
}
export const startAddTicket=(formData, props)=>{
    return (dispatch)=>{
        axios.post('/tickets',formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
               const ticket=response.data
               dispatch(addTicket(ticket))
               props.history.push(`/tickets`)
               window.location.reload()
             
            }
            else{
                // window.alert(response.data.message)
                swal(`${response.data.message}`)
            }
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//-------------remove------------------
export const removeTicket=(id)=>{
    return {
        type:'REMOVE_TICKET',
        payload:id
    }
}
export const startRemoveTicket=(id)=>{
    return (dispatch)=>{
        axios.delete(`/tickets/${id}`, {
            headers:{
            'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
                dispatch(removeTicket(id))
            }
            else{
                // window.alert(response.data)
                swal(`${response.data}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//--------------update------------------
export const editTicket=(ticket)=>{
    return {
        type:'EDIT_TICKET',
        payload:ticket
    }
}
export const startEditTicket=(formData, props)=>{
    return (dispatch)=>{
        //console.log('prop', props.match.params.id)
        axios.put(`/tickets/${props.match.params.id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
                const ticket=response.data
               dispatch(editTicket(ticket))
               props.history.push(`/tickets/${props.match.params.id}`)
            }
            else{
                // alert(response.data.message)
                swal(`${response.data.message}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startChangeCheckboxTicket=(id, formData, props)=>{
    return (dispatch)=>{
       // console.log('prop', props.match.params.id)
        axios.put(`/tickets/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
                const ticket=response.data
               dispatch(editTicket(ticket))
               props.history.push(`/tickets`)
            }
            else{
                // alert(response.data.message)  
                swal(`${response.data.message}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}