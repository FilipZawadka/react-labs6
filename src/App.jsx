import React from 'react'



class App extends React.Component{
  constructor(props){
    super(props);
  this.state={
    employees: null,
    isLoading:true
  }
}

omponentDidMount(){
  fetch('http://localhost:3004//employees')
  .then(respones => response.json())
  .then(data =>this.setState({employees:data}))
  .then(()=>this.setState({isLoading:false}));  

}
  render(){
    return(
  <div>
  {this.state.isLoading ? "Loading...":"data loaded"}
  </div>  

)
}
}
export default App 


