const employeesInitial=[]
const employeesReducers=(state=employeesInitial, action)=>{
    switch(action.type){
        case 'SET_EMP':{
            return [...action.payload]
        }
        case 'REM_EMP':{
            return state.filter(e=>e._id!=action.payload)
        }
        case 'ADD_EMP':{
            return [...state, action.payload]
        }
        case 'UPDATE_EMP':{
            return state.map(e=>
                {if(e._id==action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...e}
                }})
        }
        default:{
            return [...state]
        }
    }
}
export default employeesReducers