import React from 'react'
import {connect} from 'react-redux'

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:this.props.code?this.props.code:'',
            customer:this.props.customer?this.props.customer:'',
            customerId:'',
            department:this.props.department?this.props.department:'',
            deptId:'',
            message:this.props.message?this.props.message:'',
            employee:this.props.employee?this.props.employee:'',
            priority:this.props.priority?this.props.priority:'',
            departments:[],
            priorities:[],
            customers:[],
            employees:[],
            area:[],
            displayEmps:[]
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            code:this.state.code,
            customer:this.state.customer,
            department: this.state.department,
            employee:this.state.area,
            message:this.state.message,
            priority: this.state.priority
        } 
        console.log('form',formData)
        this.props.submit(formData)
    }
    change=(e)=>{
       // console.log('hii',e.target.name,e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        
        })
        //--------------to save multiple employee names--------------------------
        if(e.target.name==='employee'){
            const value=e.target.value.split(',')
           // console.log('value', value[1])
            this.setState((prevState)=>{
                return {
                    area:prevState.area.concat(value[0]),
                    displayEmps:prevState.displayEmps.concat(value[1])
                }
              })
        }
    }
render(){
   console.log('customer', this.props.employees)
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
            <form className="form-group" onSubmit={this.submit}>
                <fieldset>
                <label htmlFor="code">Code</label>
                    <input className="form-control" id="code" type="text" name="code" value={this.state.code} onChange={this.change}/>
            
                <label htmlFor="customer">Customer</label>
                <select className="form-control" id="customer" name='customer' onChange={this.change}>
                        {(this.props.customer)?
                        <>
                      
                        <option value={this.props.customer}>{this.props.customer.name}</option>
                        {
                            this.props.customers.map((customer)=>{
                                return (
                                <option key={customer._id} value={customer._id}>{customer.name}</option>
                                )
                            })
                        }
                        </>:
                        <>
                        <option value='select'>select</option>
                        {
                            this.props.customers.map((customer)=>{
                                return (
                                <option key={customer._id} value={customer._id}>{customer.name}</option>
                                )
                            })
                        }
                        </>
                        }
                    </select>
               
                <label htmlFor="dept">Department</label>
                <select className="form-control" id="dept" name='department' onChange={this.change}>
                       {(this.props.department)?
                       <>
                       <option value={this.props.department.id} >{this.props.department.name}</option>
                        {
                            this.props.departments.map((dept,i)=>{
                            return <option key={i} value={dept._id}>{dept.name}</option>
                            })
                        }
                        </>
                        :<>
                        <option value='select' >select</option>
                        {
                            this.props.departments.map((dept,i)=>{
                            return <option key={i} value={dept._id}>{dept.name}</option>
                            })
                        }
                        </>
                    }
                    </select>
            
                <label htmlFor="emp">Employees</label> 
                {
                            this.state.displayEmps.map((a, i)=>{
                                // console.log('a',a)
                                 return <li key={i}>{a}</li>
                           })
                           
                    } 
                           
                    <select className="form-control" id="emp" name='employee' onChange={this.change}>
                        <option value='select'>select</option>      
                        {
                            this.props.employees.map((emp)=>{
                                // console.log('emp',emp)
                            return <option key={emp._id} value={[emp._id, emp.name]}>{emp.name}</option>
                            })
                        }                       
                    </select>
                <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" value={this.state.message} onChange={this.change}/>
                
                <label htmlFor="priority">Priority</label> <br/>
                <div className="radio">
                   {(this.props.priority)?
                   <>{(this.props.priority=='high')?<input type="radio" name="priority" value='high' onChange={this.change} checked/>:
                        <input type="radio" name="priority" value='high' onChange={this.change}/>}
                        high<br/>

                   {(this.props.priority=='medium')? <input type="radio" name="priority" value='medium' onChange={this.change} checked/>:
                   <input type="radio" name="priority" value='medium' onChange={this.change}/>
                   }medium<br/>

                   {(this.props.priority=='low')?<input type="radio" name="priority" value='low' onChange={this.change} checked/>:
                   <input type="radio" name="priority" value='low' onChange={this.change}/>}low<br/></>

                    :<>
                    <input type="radio" name="priority" value='high' onChange={this.change}/>high<br/>
                    <input type="radio" name="priority" value='medium' onChange={this.change}/>medium<br/>
                    <input type="radio" name="priority" value='low' onChange={this.change}/>low<br/>
                    </>
                    }
                </div>
                <br/><br/>
                <input className="form-control btn btn-secondary"  type="submit"/>
                </fieldset>
            </form>
            </div>
            
        </div>
    )
}
}
const mapStateToProps=(state, props)=>{
    return {
        departments:state.departments,
        employees:state.employees,
        customers:state.customers
 
    }
}
export default connect(mapStateToProps)(TicketForm)