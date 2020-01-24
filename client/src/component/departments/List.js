// import React from 'react'
// import axios from '../../config/axios'
// import {Link} from 'react-router-dom'

// import DeptForm from './Form'
// //import RemoveDept from './remove'
// export default class DeptList extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             departments:[]
//         }
//        // this.props.deptSelect(this.state.departments)
//     }

//     componentDidMount(){
//         axios.get('/departments', {
//             headers:{
//                 'x-auth':localStorage.getItem('authToken')
//             }
//         })
//         .then((response)=>{
//             //console.log(response.data)
//             const departments=response.data
//             this.setState({departments})
//             //console.log(this.state.departments)
//         })
//         .catch((err)=>{
//             console.log(err)
            
//         })
//     }
//     submit=(formData)=>{
//         axios.post('/departments', formData, {
//             headers:{
//                 'x-auth':localStorage.getItem('authToken')
//             }
//         })
//         .then((response)=>{
//             //console.log(response.data)
//             this.setState((prevState)=>{
//                 return {
//                     departments: prevState.departments.concat(response.data)
//                 }
//             })
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     remove=(id)=>{
//         //console.log("hiii")
//         // for(let i of this.state.departments){
//         //     for(let j in i){
//         //         if(j=='_id' && i[j]==id){
//         //             this.setState((prevState)=>{
//         //                 return {departments:prevState.departments.filter(dept=>dept._id!=id)}
//         //             })
                    
//         //         }
                
//         //     }
           
//         // }

//         axios.delete(`/departments/${id}`,{
//             headers:{
//                 'x-auth': localStorage.getItem('authToken')
//             }
//         })
//         .then((response)=>{
//             console.log(response.data)
//            // window.location.reload()
//            this.setState((prevState)=>{
//                     return {departments:prevState.departments.filter(dept=>dept._id!=id)}
//             })

//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
   
//  render(){
//      return (
//          <div>
//             <h2>listing {this.state.departments.length} departments</h2>
//             <table border='2'>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th colSpan='2'>Actions</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         this.state.departments.map((dept)=>{
//                             return(
//                                 <tr key={dept._id}>
//                                     <td>{dept.name}</td>
//                                     <td><Link to="">Show</Link></td>
//                                     <td><button onClick={()=>{this.remove(dept._id)}}>Remove</button></td>
//                                     {/* <td><Link to="/remove">remove</Link></td> */}
//                                 </tr>
//                             )
//                         })

//                     }

//                 </tbody>

//             </table>
//             <DeptForm submit={this.submit}/>

//         </div>
//      )
//  }
// }


import React from 'react'
import {Button} from 'reactstrap'

import {Link} from 'react-router-dom'
import DeptShow from './show'
import DeptForm from './Form'
import {connect} from 'react-redux'
import {startRemoveDept} from '../../actions/departments'
import {startAddDept}  from '../../actions/departments'

class DeptList extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    submit=(formData)=>{
       this.props.dispatch(startAddDept(formData)) 
    }
    remove=(id)=>{
       this.props.dispatch(startRemoveDept(id))
    }
 render(){
     return (
         <div className="row">
<div className="col-md-5 offset-md-3">
            <h2 className="text-center">Listing {this.props.departments.length} departments</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.departments.map((dept)=>{
                            return(
                                <tr key={dept._id}>
                                    <td>{dept.name}</td>
                                    <td><Link to={`/departments/${dept._id}`} className="btn btn-secondary" >Show</Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>{this.remove(dept._id)}}>Remove</button></td>
                                </tr>
                            )
                        })

                    }

                </tbody>

            </table>
            <DeptForm submit={this.submit}/>

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

export default connect(mapStateToProps)(DeptList)