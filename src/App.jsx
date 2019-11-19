import React from 'react'
import AddItem from './AddItem'


class App extends React.Component{
  constructor(props){
    super(props);
  this.state={
    employees: null,
    isLoading:true,
    add:false
  }
  this.AddButtonClick=this.AddButtonClick.bind(this);
  this.ComponentCancelProps=this.ComponentCancelProps.bind(this);
}

omponentDidMount(){
  fetch('http://localhost:3004//employees')
  .then(respones => response.json())
  .then(data =>this.setState({employees:data}))
  .then(()=>this.setState({isLoading:false}));  

}
  AddButtonClick()
  {
      this.setState({add:true});
  }
  
  ComponentCancelProps()
  {
      this.setState({add:false});
  }
  render(){
    return(
  <div>
  {this.state.isLoading ? <label>Loading...</label>:<label>data loaded</label>}
  {!this.state.isLoading && !this.state.add? <button onClick={this.AddButtonClick}>Add employee</button>: null}
  {!this.state.isLoading && this.state.add? <AddItem CancelProps={this.ComponentCancelProps} /> : null}
  </div>  

)
}
}
export default App 


