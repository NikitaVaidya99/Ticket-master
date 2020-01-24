import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {startGetUser} from './actions/users'
import {startSetCustomers} from './actions/customers'
import {startSetDepartments} from './actions/departments'
import {startSetEmployees} from './actions/employees'
import {startSetTickets} from './actions/tickets'

import App from './App';
import configureStore from './store/configureStore'

const store=configureStore()

store.subscribe(()=>{
     console.log(store.getState())
})
//meant for page reloads
//handle all page reloads and to get the initial data from the serverto stre it in the redux store
if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
    store.dispatch(startSetCustomers())
    store.dispatch(startSetDepartments())
    store.dispatch(startSetEmployees())
    store.dispatch(startSetTickets())
}

const jsx=(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

