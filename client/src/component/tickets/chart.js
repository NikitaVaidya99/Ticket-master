import * as React from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import {Progress} from 'reactstrap'
 
class Charts extends React.Component {
  findDepartment = (id) => {
     return this.props.departments.find(dept => dept._id == id)
}
  render() {
    const pendingTickets = this.props.tickets.filter(ticket=>!ticket.isResolved)
      const high=this.props.tickets.filter(t=>t.priority=='high')
      const medium=this.props.tickets.filter(t=>t.priority=='medium')
      const low=this.props.tickets.filter(t=>t.priority=='low')
      const resolved=this.props.tickets.filter(t=>t.isResolved==true).length
      const percent=Math.round((resolved/this.props.tickets.length)*100)
      const data = []
        const Header = ["Departments", "Tickets", { role: "style" }]
        data.push(Header)
            this.props.departments.map(dept=>{
                    const temp = []
                    temp.push(`${dept.name}`)
                   temp.push(pendingTickets.filter(ticket=>(ticket.department.name? ticket.department.name : this.findDepartment(ticket.department).name) == dept.name).length)
                    temp.push("blue")
                    data.push(temp)
            })
    return (
        
      <div className={"my-pretty-chart-container"}>
<br/><br/>
<div className="text-center">{percent}%</div>
        <Progress animated value={`${percent}` }/>
        <br/>

        <div className="row">
          <div className="col-md-6">
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Priority', 'tickets per department'],
              ['High',high.length],
              ['Medium',medium.length],
              ['Low',low.length],
            ]}
            options={{
              title: 'Priority of Tickets',
              // Just add this option
              is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
          />
          </div>
            <div className="col-md-6">
              
          <Chart
                    chartType="Bar"
                    width="100%"
                    height="300px"
                    data={data}
                    options={{
                        chart: {
                            title: 'Tickets By Department',
                        }
                    }}
                     />
            </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state, props)=>{
   return {
     departments:state.departments,
    tickets:state.tickets
   } 
}
export default connect(mapStateToProps)(Charts)