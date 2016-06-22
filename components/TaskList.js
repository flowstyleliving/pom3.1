import React, { Component } from 'react'
import Task from './Task'

class TaskList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.tasks.map((task) => {
            return <Task key={task.id} task={task} actions={this.props.actions}/>
          })
        }

      </ul>
    )
  }

}

export default TaskList
