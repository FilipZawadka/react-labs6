import React from 'react'

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: false,
            name: '',
            age: '',
            company: '',
            email:'',
            isActive: false
        }

        this.handleClick = this.handleClick.bind(this);

        }

   /* handleSubmit(event) {
            event.preventDefault();
            
            const data = new FormData(event.target);

            fetch('http://localhost:3004/employees', {
              method: 'POST',
              body: data })
              .then(reload)
              .then(this.props.saving());
              
              
          }*/
    handleClick()
    {
        this.setState((prevState) => ({
            show: !prevState.show
        }));
    }
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.saving()
        const employee={
            name: this.state.name,
            age: this.state.age,
            company: this.state.company,
            email: this.state.email,
            isActive: this.state.isActive
        }
        fetch('http://localhost:3004/employees', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
              body: JSON.stringify({
            "isActive": this.state.isActive,
              "age": this.state.age,
              "name": this.state.name,
              "company": this.state.nompany,
              "email": this.state.email})})
             .then( window.location.reload(false))
            .then(this.props.saving());
    }
    
    inputChangeHandler = (event) => {
    this.setState({
    [event.target.name]:event.target.value

})
    }

    render() {
        const {name,age,company,email,isActive} = this.state
        return (
            <div>
            
            {this.state.show ? 
            <a>
                <form onSubmit={this.submitHandler}>
                <ul>Name <input type="text" name='name' value={name} onChange={this.inputChangeHandler}/></ul>
                <ul>Age <input type="number" name='age' value={age} onChange={this.inputChangeHandler}/></ul>
                <ul>Company <input type="text" name='company' value={company} onChange={this.inputChangeHandler}/></ul>
                <ul>Email <input type="text" name='email' value={email} onChange={this.inputChangeHandler}/></ul>
                <ul>Is Active <input type="checkbox" name='isActive' value={isActive} onChange={this.inputChangeHandler}/> </ul>
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={this.handleClick}>Cancel</button>
            </a>:<button onClick={this.handleClick}> Add an employee</button>}

            </div>
        );
        }
}
export default AddEmployee