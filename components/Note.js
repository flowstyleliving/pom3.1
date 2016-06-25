import React, { Component } from 'react'

class Note extends Component {
  handleCompleteNote() {
    this.props.actions.completeNote(this.props.task.id, this.props.note.id)
  }

  render() {
    return (
      <li>
        {this.props.note.title}
        <button onClick={this.handleCompleteNote.bind(this)}>Mark as completed</button>
      </li>
    )
  }
}

export default Note
