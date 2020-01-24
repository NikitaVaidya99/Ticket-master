import React from 'react'
import {connect} from 'react-redux'

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name? props.name:'',
            mobile:props.mobile? props.mobile:'',
            email:props.email?props.email:'',
            department:props.department?props.department:'',
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            name: this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        this.props.submit(formData)   
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
        console.log(e.target.name,e.target.value)  
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Employee form</h2>
                <form className="form-group" onSubmit={this.submit}>
                    <label htmlFor="name">name</label> 
                    <input className="form-control" id="name" type="text" name="name" value={this.state.name} onChange={this.change}/>
                    
                    <label htmlFor="email">email</label>
                    <input className="form-control" id="email" type="text" name="email" value={this.state.email} onChange={this.change}/>
   
                    <label htmlFor="mobile">mobile</label>
                    <input className="form-control" id="mobile" type="text" name="mobile" value={this.state.mobile} onChange={this.change}/>

                    <label htmlFor="dept">department</label>
                    <select className="form-control" id="dept" name="department" onChange={this.change}>
                        <option value={this.state.department.name}>{this.state.department.name}</option>
                       {
                           this.props.departments.map((dept)=>{
                            return <option key={dept._id} value={dept._id}>{dept.name}</option>
                           })
                       }
                       </select>
                       <br/>
                    <input className="form-control btn btn-primary" type='submit'/>
                </form>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}
export default connect(mapStateToProps)(EmployeeForm)