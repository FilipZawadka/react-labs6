import React from 'react'

class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: null,
          isLoading: true,

        };

      }
    
      componentDidMount() {
        this.setState({ isLoading:true});
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ employees:data }))
        .then(() => {this.setState({ isLoading: false })
        });
      }

    
      render()
      {
        return(
          <div>

            {this.state.isLoading ? <label>Loading...</label>:<label>Loaded</label>}

          </div>
        )
      }
}
export default Companies