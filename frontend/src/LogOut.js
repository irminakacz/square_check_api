import React, { Component } from 'react';

class LogOut extends Component {
  render() {
    return (
      <div onClick={ this.props.logout }>Logout</div>
    )
  }
}

export default LogOut;
