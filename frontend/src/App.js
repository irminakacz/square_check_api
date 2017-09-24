import React, { Component } from 'react';
import List from './List';

class App extends Component {

  render() {
    return (
      <List conn={this.props.conn} />
    );
  }
}

export default App;
