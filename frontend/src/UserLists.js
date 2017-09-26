import React, { Component } from 'react';
import List from './List';

class UserLists extends Component {

  constructor() {
    super();

    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    let lists = [];
    let token = "JWT " + this.props.token;
    let instance = axios.create({
      baseURL: 'http://localhost:8000',
      headers: { Authorization: token }
    })
      
    instance.get("/users/?format=json").then(response => {
      response.data[1].lists.forEach(list => {
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
        { lists }
      </div>
    );
  }
}

export default UserLists;
