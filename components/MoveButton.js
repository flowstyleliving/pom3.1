import React, { Component } from 'react'

export default class MoveButton extends Component {
  upTask() {
    console.log(this.props.task)
    this.props.actions.taskUp(this.props.task.id)
  }
  render() {
    return (
      <button onClick={this.upTask.bind(this)}>^</button>

    )
  }
}
