import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
import {startRemoveCustomer} from '../../actions/customers'
import {connect} from 'react-redux'

function CustomerList(props){
    const remove=(id)=>{
        props.dispatch(startRemoveCustomer(id))
    }
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="text-center">List of {props.customers.length} customers</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Mobile</th>
                            <th className="text-center" colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.customers.map((customer)=>{
                                return (
                                    <tr key={customer._id}>
                                    <td><Link to={`/customers/${customer._id}`}>{customer.name}</Link></td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td><Link className="btn btn-secondary" to={`/customers/${customer._id}`}>show</Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>{
                                        const confirmRemove=window.confirm('are you sure?')
                                        if(confirmRemove){
                                            remove(customer._id)
                                        }
                                        
                                        }}>remove</button></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                    </table>
                    <Link className="btn btn-primary" to='/customers/New'>Add Customer</Link>
                
                </div>
                
            </div>
        )
    }

const mapStateToProps=(state)=>{
   return { customers:state.customers}
}
export default connect(mapStateToProps)(CustomerList)