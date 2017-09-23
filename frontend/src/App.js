import React, { Component } from 'react';
import Task from './Task';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    let tasks = [];
    this.props.conn.get('/tasks').then(response => {

      response.data.forEach(task => {
        tasks.push(new Task(task.id, task.task, task.done));
      })

      this.setState({
        tasks: tasks
      });
    });

  }

  render() {
    const tasks = this.state.tasks.map(task => {
      return <li key={"task_" + task.id}>{ task.task }</li>;
    });

    return (
      <ul>
        { tasks }
      </ul>
    );
  }
}

export default App;
