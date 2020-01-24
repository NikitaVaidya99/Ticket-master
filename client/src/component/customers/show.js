import React from 'react'
import {Jumbotron} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

function CustomerShow(props){
        const id=props.match.params.id 
             // const id=this.state.match.params.id
        const {name, email, mobile}=props.customer
        return(
            <div className="row">
                <div className="col-md-5 offset-md-3">
                {(!_.isEmpty(props.customer)) && 
                <div>
                    <br/>
                      <Jumbotron style={{"backgroundColor":"rgba(0,0,0,0.2)"}}>
                    <h1 className="display-3">{name}</h1>
                    <h4>Email- {email}</h4>
                    <h4>Mobile- {mobile}</h4>
                    <Link to={`/customers/edit/${id}`} className="btn btn-warning">Edit</Link>&nbsp;
                    <Link to='/customers' className="btn btn-dark">Back</Link>
      </Jumbotron>
                </div>
                }
                </div>
              
            </div>
        )
     }

const mapStateToProps=(state,props)=>{
    //console.log('oi', state.customers,props)
    return {
        customer:state.customers.find(c=>c._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(CustomerShow)