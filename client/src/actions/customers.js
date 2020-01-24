import axios from '../config/axios'
import swal from 'sweetalert'

//--------------listing------------
export const setCustomers=(customers)=>{
    return {
        type:'SET_CUSTOMERS',
        payload:customers
    }
}

export const startSetCustomers=()=>{
    return (dispatch)=>{
        axios.get('/customers', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
       
        .then((response)=>{
            const customers=response.data
           dispatch(setCustomers(customers))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//-----------remove--------------
export const removeCustomer=(id)=>{
    return {
            type:'REMOVE_CUSTOMER',
            payload:id
    }
}

export const startRemoveCustomer=(id)=>{
    return (dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           if(!response.data.hasOwnProperty('errors')){
            dispatch(removeCustomer(response.data._id))
           }
           else{
            //    window.alert(response.data)
            swal(`${response.data}`)
           }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//------------add-----------------
export const addCustomer=(customer)=>{
    return {
        type:'ADD_CUSTOMER',
        payload:customer
    }
}
export const startAddCustomer=(formData, props)=>{
    return (dispatch)=>{
        axios.post('/customers',formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
                }
            })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                swal(`${response.data.errors.message}`)
            }
            else{
                const customer=response.data
                dispatch(addCustomer(customer))
                props.history.push(`/customers/${customer._id}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    } 
}

//---------edit------------
export const editCustomer=(customer)=>{
    return {
        type:'EDIT_CUSTOMER',
        payload:customer
    }
}

export const startEditCustomer=(formData, props)=>{
    return (dispatch)=>{
        axios.put(`/customers/${props.match.params.id}`,formData, {
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    // alert(response.data.errors.message)
                    swal(`${response.data.errors.message}`)
                }
                else{
                    // console.log('oi',response.data)
                    const customer=response.data
                    dispatch(editCustomer(customer))
                    props.history.push(`/customers/${customer._id}`)
                }
            
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}