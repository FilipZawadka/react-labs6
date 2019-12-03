import React from 'react'
import PageEmployee from './PageEmployee'
import PageEmployeesList from './PageEmployeesList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

class App extends React.Component {
    render()
    {
      return(
        <div>
        <PageEmployee></PageEmployee>
        <PageEmployeesList></PageEmployeesList>
      </div>
      )
    }
}

export default App
/*
  <Router>
    <Switch>
      <Route exact path="/">
         <PageEmployeesList></PageEmployeesList>
      </Route>
      <Route exact path="/new">
       <PageEmployee></PageEmployee>
      </Route>
    </Switch>
  </Router>

*/