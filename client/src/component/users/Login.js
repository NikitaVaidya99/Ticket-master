import React from 'react'
import {startLoginUser} from '../../actions/users'
import {connect} from 'react-redux'
class Login extends React.Component{
constructor(){
    super()
    this.state={
        email:'',
        password:''  
    }
}
submit=(e)=>{
    e.preventDefault()
    const formData={ 
        email:this.state.email,
        password:this.state.password
    }
   this.props.dispatch(startLoginUser(formData, this.props))
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
             <h2 className="text-center">Login</h2>
             <form className="form-group" onSubmit={this.submit}>
                
                 <label htmlFor="email">Email</label>
                 <input className="form-control" id="email" type="text" value={this.state.email} onChange={this.change} name="email"/>
                
                 <label htmlFor="password">Password</label>
                 <input className="form-control" id="password" type="password" value={this.state.password} onChange={this.change} name="password"/>
                 <br/>
                 <input className="form-control btn btn-primary" type="submit"/>

             </form>
             </div>
         </div>
     )
 }
}


export default connect()(Login)
