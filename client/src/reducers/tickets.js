const ticketsInitial=[]

const ticketsReducers=(state=ticketsInitial, action)=>{
switch(action.type){
    case 'SET_TICKETS':{
        return [...action.payload]
    }
    case 'ADD_TICKET':{
        return [...state, action.payload]
    }
    case 'EDIT_TICKET':{
        console.log('edit', action.payload)
        return state.map((t)=>{
            if(t._id==action.payload._id){
                return {...action.payload}
            }
            else{
                return {...t}
            }
        })
    }
    case 'REMOVE_TICKET':{
        return state.filter(t=>t._id!=action.payload)
    }
    default:{
        return [...state]
    }
}
}
export default ticketsReducers