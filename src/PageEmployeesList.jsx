import React from 'react'

class PageEmployeesList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        employees: [],
        isLoading: true,

      };
    }
  
    componentDidMount() {
      this.setState({ isLoading:true});
      fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees:data }))
      .then(() => {this.setState({ isLoading: false })});
    }
   

  
    render()
    {
      return(
        <div>
            {this.state.isLoading ?  <label>Loading...</label>:<label>Loaded {this.state.employees.length} elements: </label>}
            {this.state.employees.map((emp) => <ul key={emp.id}>{ emp.name} {emp.age} {emp.company}  {emp.email} {emp.isActive ? "Active" : "Not Active"}</ul>)}
        </div>
      )
    }
}

export default PageEmployeesList