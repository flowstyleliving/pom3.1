import React, { Component } from 'react'

class Note extends Component {


  render() {
    return (
      <li>
        {this.props.note.title}
        <button onClick={this.props.handleCompleteNote.bind(this)}>Mark as completed</button>
      </li>
    )
  }
}

export default Note
