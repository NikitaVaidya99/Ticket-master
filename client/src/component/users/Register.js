import React from 'react'
import {connect} from 'react-redux'
import {startSetUser} from '../../actions/users'
class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
            
        }
    }
    submit=(e)=>{
       e.preventDefault()
       const formData={
           username:this.state.username,
           email:this.state.email,
           password:this.state.password
       }
      this.props.dispatch(startSetUser(formData, this.props))
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Register</h2>
                <form className="form-group" onSubmit={this.submit}>
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" value={this.state.username} onChange={this.change} name="username"/>
                  
                    <label htmlFor="email">email</label>
                    <input className="form-control" id="email" type="text" value={this.state.email} onChange={this.change} name="email"/>
                   
                    <label htmlFor="password">password</label>
                    <input className="form-control" id="password" type="password" value={this.state.password} onChange={this.change} name="password"/>
                     <br/>
                    <input className="form-control btn btn-primary" type="submit"/>



                </form>
                </div>
            </div>
        )
    }
}

export default connect()(Register)