import axios from '../config/axios'
import swal from 'sweetalert'

//-------------listing----------------
export const setEmployees=(employees)=>{
    return {
        type:'SET_EMP',
        payload:employees
    }
}

export const startSetEmployees=()=>{
    return (dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employees=response.data
           dispatch(setEmployees(employees))

        })
        .catch((err)=>{
            console.log(err)
        })

    }
}

//-----------remove-----------------
export const removeEmp=(id)=>{
    return {
        type:'REM_EMP',
        payload:id
    }
}

export const startRemoveEmp=(id)=>{
    return (dispatch)=>{
        axios.delete(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
               dispatch(removeEmp(id))
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

//-----------add-----------
export const addEmployee=(employee)=>{
    return {
        type:'ADD_EMP',
        payload:employee
    }
}
export const startAddEmployee=(formData, props)=>{
    return (dispatch)=>{
        axios.post('/employees',formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
                }
            })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                // alert(response.data.message)
                swal(`${response.data.message}`)
            }
            else{
                const employee=response.data
                dispatch(addEmployee(employee))
                props.history.push(`/employees/${employee._id}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//------------update--------------
export const updateEmp=(employee)=>{
    return {
        type:'UPDATE_EMP',
        payload:employee
    }
}

export const startUpdateEmp=(formData,props)=>{
    return (dispatch)=>{
        axios.put(`/employees/${props.match.params.id}`, formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(!response.data.hasOwnProperty('err')){
                const employee=response.data
                dispatch(updateEmp(employee))
                props.history.push(`/employees/${props.match.params.id}`)
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