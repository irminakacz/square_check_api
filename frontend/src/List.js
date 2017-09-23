import React, { Component } from 'react';
import Task from './Task';

class List extends Component {

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
        tasks.push({
          id: task.id,
          task: task.task, 
          done: task.done
        });
      })

      this.setState({
        tasks: tasks
      });
    });

  }

  render() {
    const tasks = this.state.tasks.map(task => {
      return <Task key={ "task_" + task.id } task={ task } />;
    });

    return (
      <ul>
        { tasks }
      </ul>
    );
  }
}

export default List;
