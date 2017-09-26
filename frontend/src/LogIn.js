import React, { Component } from 'react';

class LogIn extends Component {

  constructor() {
    super();

    this.state = {
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
      localStorage.setItem("token", response.data.token);
      this.setState({
        username: "",
        password: ""
      });
      this.props.reloadApp();
    });
  }

  render() {
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

export default LogIn;
