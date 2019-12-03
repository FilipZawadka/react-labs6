import React from 'react'

class PageEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            age: '',
            company: '',
            email:'',
            isActive: false
        }



        }


    submitHandler = (event) =>{
        event.preventDefault();
        this.props.saving()

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
            

            <a>
                <form onSubmit={this.submitHandler}>
                <ul>Name <input type="text" name='name' value={name} onChange={this.inputChangeHandler}/></ul>
                <ul>Age <input type="number" name='age' value={age} onChange={this.inputChangeHandler}/></ul>
                <ul>Company <input type="text" name='company' value={company} onChange={this.inputChangeHandler}/></ul>
                <ul>Email <input type="text" name='email' value={email} onChange={this.inputChangeHandler}/></ul>
                <ul>Is Active <input type="checkbox" name='isActive' value={isActive} onChange={this.inputChangeHandler}/> </ul>
                <input type="submit" value="Submit"/>
            </form>
         
            </a>

            </div>
        );
        }
}
export default PageEmployee