import axios from '../config/axios'
import swal from 'sweetalert'
import {setCustomers} from './customers'
// import {setDepartments} from './departments'
// import {setEmployees}from './employees'
// import {setTickets} from './tickets'
export const setUser=(user={})=>{
    return {
        type:'SET_USER',
        payload:user
    }
}
export const startSetUser=(formData, props)=>{
    return (dispatch)=>{
        axios.post('/users/register', formData)
        .then((response)=>{
             if(response.data.hasOwnProperty('errors')){
                //  alert(response.data.message)
                swal(`${response.data.message}`)
             }
             else{
                //  alert('successfully registered')
                swal("Thank you!","You have successfully registered", "success")
                 dispatch(setUser())
                 props.history.push('/Login')
             }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startLoginUser=(formData, props)=>{
    return (dispatch)=>{
        axios.post('/users/login', formData)
        .then((response)=>{
             if(response.data.hasOwnProperty('errors')){
                //  alert(response.data)
                swal(`${response.data}`,"error")
             }
             else{
                 const token=response.data.token
                 localStorage.setItem('authToken',token)

                 Promise.all([axios.get('/users/account', {
                     headers:{
                         'x-auth':token
                     }
                 }), axios.get('/customers',{
                     headers:{
                         'x-auth':token
                     }
                 })
                ])
                .then(values=>{
                    const [userResponse, customersResponse]=values
                    dispatch(setUser(userResponse.data))
                    dispatch(setCustomers(customersResponse.data))
                    swal("You have successfully Logged in!", "success")
                    props.history.push('/')
                })
                
             }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user=response.data
            dispatch(setUser(user))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startLogout=(props)=>{
    // console.log('in', props)
    return (dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log('in logout', response.data)
            if(response.data.hasOwnProperty('notice')){
                dispatch(setUser({}))
                // dispatch(setCustomers({}))
                // dispatch(setDepartments({}))
                // dispatch(setTickets({}))
                swal("Thank You!", "Logged Out!","success")
                localStorage.removeItem('authToken')
                props.history.push('/login')
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}