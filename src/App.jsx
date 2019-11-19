import React from 'react'
import AddEmployee from './AddEmployee'
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        employees: [],
        isLoading: true,
        isSaving:false
      };
      this.handleSaving=this.handleSaving.bind(this);
    }
  
    componentDidMount() {
      this.setState({ isLoading:true});
      fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees:data }))
      .then(() => {this.setState({ isLoading: false })});
    }
   
    handleSaving()
    {
        this.setState((prevState) => ({
            isSaving: !prevState.isSaving
        })); 

    }
  
    render()
    {
      return(
        <div>
        <AddEmployee saving={this.handleSaving}/>
            {this.state.isLoading ? <a>{ this.state.isSaving ?<label>Saving...</label> : <label>Loading...</label>}</a>:<label>Loaded {this.state.employees.length} elements: </label>}
            <p>
              {this.state.employees.map((emp) => <ul key={emp.id}>{ emp.name} {emp.age} {emp.company}  {emp.email} {emp.isActive ? "Active" : "Not Active"}</ul>)}
            </p>
            
            
        </div>
      )
    }
}

export default App