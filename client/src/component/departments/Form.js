import React from 'react'

export default class DeptForm extends React.Component{
    constructor(){
        super()
            this.state={
                name:''
            }
        }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.submit(formData)
        this.setState({name:''})
    }
    change=(e)=>{
        //console.log(e.target.value)
        let name=e.target.value
        this.setState({name})
    }
    render(){
        return(
            <div>    
                <form className="form-group" onSubmit={this.submit}>
                    <label htmlFor="dept">Department</label>
                <input type='text' className="form-control" id="dept" value={this.state.name} onChange={this.change}/>
                <br/>
                <input className="btn btn-primary" type='submit' />
                </form>
            
                
            </div>
        )
    }
} 