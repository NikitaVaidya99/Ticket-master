import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import customersReducer from '../reducers/customers'
import departmentsReducers from '../reducers/departments'
import employeesReducers from '../reducers/employees'
import ticketsReducers from '../reducers/tickets'
import userReducer from '../reducers/users'

const configureStore=()=>{
    const store=createStore(combineReducers({
        customers:customersReducer,
        departments:departmentsReducers,
        employees:employeesReducers,
        tickets:ticketsReducers,
        user:userReducer
    }), applyMiddleware(thunk))

    return store
}
export default configureStore