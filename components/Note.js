import React, { Component } from 'react'
import Radium from 'radium'


class Note extends Component {
  handleCompleteNote() {
    this.props.actions.completeNote(this.props.task.id, this.props.note.id)
  }

  handleDeleteNote() {
    this.props.actions.deleteNote(this.props.task.id, this.props.note.id)
  }

  render() {
    let styles = {
      completeButton: {
        background: 'blue',
        border: 0,
        borderRadius: 4,
        color: 'white',
        padding: '6px',
      },

      deleteButton: {
        background: 'grey',
        color: 'white',
        border: 0,
        borderRadius: 4,
        padding: '6px'
      },

      item: {
        listStyleType: 'none',
        marginLeft: '-10px',
        marginBottom: '6px'
      },

      completed: {
        textDecoration: 'line-through',
        color: 'red'
      },

      inner: {
        color: 'black'
      }
    };
    return (
      <li style={styles.item}>
        <button style={styles.completeButton} onClick={this.handleCompleteNote.bind(this)}><i className="fa fa-check-circle" aria-hidden="true"></i></button>
        &nbsp; <span style={Object.assign({}, this.props.note.completed && styles.completed)}><span style={styles.inner}>{this.props.note.title}</span></span> &nbsp;
        <button style={styles.deleteButton} onClick={this.handleDeleteNote.bind(this)}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
      </li>
    )
  }
}

export default Radium(Note)
