const deptInitial=[]

const departmentsReducers=(state=deptInitial, action)=>{
    switch(action.type){
        case 'SET_DEPT':{
            return [...action.payload]
        }
        case 'REMOVE_DEPT':{
            return state.filter(d=>d._id!=action.payload)
        }
        case 'ADD_DEPT':{
            return [...state, action.payload]
        }
        default :{
            return [...state]
        }
    }

}
export default departmentsReducers