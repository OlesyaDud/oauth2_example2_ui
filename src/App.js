import logo from './logo.svg';
import './App.css';
import Home from './home/Home'
import PrivateRoute from './PrivateRoute'
import Profile from './profile/Profile'
import Login from './login/Login'
import {
  Route,
  Switch
} from 'react-router-dom';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <PrivateRoute path="/profile" authenticated={localStorage.getItem("accessToken") !== null} encodedJwt={localStorage.getItem("accessToken")}
                component={Profile}></PrivateRoute>
              <Route path="/login"
                render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
              <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;