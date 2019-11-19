import React from 'react'
class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: false
        }

        this.handleClick = this.handleClick.bind(this);

        }

    handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);

            fetch('http://localhost:3004/employees', {
              method: 'POST',
              body: data });
              window.location.reload(false);
          }
    handleClick()
    {
        this.setState((prevState) => ({
            show: !prevState.show
        }));
    }
    

    render() {
        return (
            <div>
            {this.state.show ? 
            <a>
                <form >
                <ul>Name <input type="text" name='name' /></ul>
                <ul>Age <input type="number" name='age' /></ul>
                <ul>Company <input type="text" name='company' /></ul>
                <ul>Email <input type="text" name='email' /></ul>
                <ul>Is Active <input type="checkbox" name='isActive' /> </ul>
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={this.handleClick}>Cancel</button>
            </a>:<button onClick={this.handleClick}> Add an employee</button>}

            </div>
        );
        }
}
export default AddEmployee