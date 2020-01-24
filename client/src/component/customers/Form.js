import React from 'react'

export default class CustomerForm extends React.Component{
    constructor(props){
        super(props)
      //  console.log(props)
        this.state={
            name:props.name? props.name :'',
            mobile:props.mobile? props.mobile :'',
            email:props.email? props.email:''

        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            name: this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        //console.log(formData)
        this.props.submit(formData)
       
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
    render(){
        return(
            <div className="form-group">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form onSubmit={this.submit}>
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" name="name" value={this.state.name} onChange={this.change}/>

                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="text" name="email" value={this.state.email} onChange={this.change}/>
                
                    <label htmlFor="mobile">Mobile</label>
                    <input className="form-control" id="mobile" type="text" name="mobile" value={this.state.mobile} onChange={this.change}/>
                    <br/>
                    <input className="btn btn-primary mb-3" type='submit'/>
                    </form>
                    </div>
                
                </div>
               
            </div>
        )
    }
}