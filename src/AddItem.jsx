import React from 'react'
class AddItem extends React.Component
{    
constructor(props)
{
super(props);
this.state={}
    
}

render()
{

   return(
    <div>
        <br/>
        <label>isActive: </label><input type="checkbox"></input>
        <br/>
        <br/>
        <label>age: </label><input type="number" min="0"></input>
        <br/>
        <br/>
        <label>name: </label><input></input>
        <br/>
        <br/>
        <label>company: </label><input></input>
        <br/>
        <br/>
        <label>email: </label><input></input>
        <br/>
        <br/>
        <button>Submit</button>
        <button onClick={this.props.CancelProps}>Cancel</button>
    </div>
    )

}
}

export default AddItem