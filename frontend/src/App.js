import React, { Component } from 'react';
import List from './List';
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    let lists = [];
    this.props.conn.get('/lists').then(response => {

      response.data.forEach(list => {
        lists.push({
          id: list.id,
          title: list.title, 
          color: list.color,
          tasks: list.tasks
        });
      })

      this.setState({
        lists: lists
      });
    });

  }

  render() {
    const lists = this.state.lists.map(list => {
      return (
        <List 
          key={ "list_" + list.id } 
          list={ list } 
          conn={ this.props.conn }
        />
      );
    });
    return (
      <div>
        <div id="navbar">
          SquareCheck
        </div>
        <div>
          { lists }
        </div>
      </div>
    );
  }
}

export default App;
