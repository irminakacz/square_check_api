import React, { Component } from 'react';
import UserLists from './UserLists';
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      token: "",
      username: "",
      password: ""
    }

    this.saveUsername = this.saveUsername.bind(this);
    this.savePassword = this.savePassword.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  saveUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  savePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  authenticate(event) {
    event.preventDefault();
    this.props.conn.post('/square-check-auth/', {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response.data.token);
      this.setState({
        token: response.data.token
      });
    });
  }

  render() {
    if (this.state.token.length) {
      return (
        <div>
        <div id="navbar">
        SquareCheck
        </div>
        <UserLists 
          conn={ this.props.conn } 
          token={ this.state.token }
        />
        </div>
      )
    } else {
      return (
        <div>
          <div id="navbar">
          SquareCheck
          </div>
          <form>
            Username: 
            <input 
              type="text" 
              value={ this.state.username } 
              onChange={ this.saveUsername }
            />
            <br />
            Password: 
            <input
              type="password"
              value={ this.state.password }
              onChange={ this.savePassword }
            />
            <br />
            <button type="submit" onClick={ this.authenticate }>Login</button>
          </form>
        </div>
      )
    }
  }
}

export default App;
