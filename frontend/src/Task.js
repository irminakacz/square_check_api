import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <li>
        { this.props.task.task }
      </li>
    );
  }
}

export default Task;
