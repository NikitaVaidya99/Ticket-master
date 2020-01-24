import axios from '../config/axios'
//import RemoveDept from '../component/departments/remove'
import swal from 'sweetalert'
export const setDepartments=(dept)=>{
    return {
        type:'SET_DEPT',
        payload:dept
    }
}

export const startSetDepartments=()=>{
    return (dispatch)=>{
        axios.get('/departments', {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{ 
            const departments=response.data
           dispatch(setDepartments(departments))
        })
        .catch((err)=>{
            console.log(err)
            
        })
    }
}

//--------------remove----------------------
export const removeDept=(id)=>{
    return {
        type: 'REMOVE_DEPT',
        payload:id
    }
} 

export const startRemoveDept=(id)=>{
    return (dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
          dispatch(removeDept(id))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//-----------add---------------------
export const addDept=(dept)=>{
    return {
        type:'ADD_DEPT',
        payload:dept
    }
}

export const startAddDept=(formData)=>{
    return (dispatch)=>{
        axios.post('/departments', formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const dept=response.data
            dispatch(addDept(dept))
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}