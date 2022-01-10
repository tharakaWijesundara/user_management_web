import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Home from './pages/home.js'
import SignInSignUpPage from './pages/signInsignUpPage.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 0,
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.state.user = JSON.parse(localStorage.getItem('userData'));

    console.warn("local", this.state.user)
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: 1,
      user: data
    })
  }
  render() {
    return (

      <div className="App">
        <Router>
          <Switch style={{paddingLeft:"0px"}}>
            <Route exact strict path={"/"}
              render={
                props => (
                  <Home {...props} loggedData={this.state.user} />
                )
              }
            />
            <Route path={"/login"}
              render={props => (
                <SignInSignUpPage {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
              )
              }
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
