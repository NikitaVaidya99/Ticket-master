import React from 'react';
import {connect} from 'react-redux'
import {Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse} from 'reactstrap'
import _ from 'lodash'

import Home from './component/common/Home'
import Register from './component/users/Register'
import Login from './component/users/Login'
import Logout from './component/users/Logout'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './App.css';

import CustomerList from './component/customers/List'
import CustomerShow from './component/customers/show'
import CustomerNew from './component/customers/New'
import CustomerEdit from './component/customers/Edit'

import EmployeesList from './component/employees/List'
import EmployeeShow from './component/employees/Show'
import EmployeeNew from './component/employees/New'
import EmployeeEdit from './component/employees/edit'

import DeptList from './component/departments/List'
import DeptShow from './component/departments/show'

import TicketList from './component/tickets/List'
import TicketNew from './component/tickets/New'
import TicketShow from './component/tickets/Show'
import TicketEdit from './component/tickets/Edit'
import CompletedTickets from './component/tickets/completedTickets'



function App(props) {
  return (
    <BrowserRouter>
    <div className="container">
{
          !_.isEmpty(props.user)?  (
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ticket Master</NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/customers">Customers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/employees">Employees</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/departments">Departments</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tickets">Tickets</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/logout">Logout</NavLink>
        </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

          </div>
           
          ) :(
            <div>
           <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ticket Master</NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
            </div>
            
            
          )
        }

      <Switch>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/logout' component={Logout}/>

      <Route path='/customers' component={CustomerList} exact={true}/>
      <Route path='/customers/New' component={CustomerNew}/>
      <Route path='/customers/Edit/:id' component={CustomerEdit}/>
      <Route path='/customers/:id' component={CustomerShow}/>

      <Route path='/employees' component={EmployeesList} exact={true}/>
      <Route path='/employees/New' component={EmployeeNew}/>
      <Route path='/employees/edit/:id' component={EmployeeEdit}/>
      <Route path='/employees/:id' component={EmployeeShow}/>

      <Route path='/departments' component={DeptList} exact={true}/>
      <Route path='/departments/:id' component={DeptShow}/>

      <Route path='/tickets' component={TicketList} exact={true}/>
      <Route path='/tickets/new' component={TicketNew}/>
      <Route path='/completedTickets' component={CompletedTickets}/>
      <Route path='/tickets/edit/:id' component={TicketEdit}/>
      <Route path='/tickets/:id'  component={TicketShow}/>
     
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return {
        user:state.user
  }
}

export default connect(mapStateToProps)(App);
