import React, { Component } from 'react'
import Radium from 'radium'


class Note extends Component {
  handleCompleteNote() {
    this.props.actions.completeNote(this.props.task.id, this.props.note.id)
  }

  render() {
    let styles = {
      base: {
        background: 'blue',
        border: 0,
        borderRadius: 4,
        color: 'white',
        padding: '10px',
      },

      item: {
        listStyleType: 'none',
        marginLeft: '-10px'
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
        <button style={styles.base} onClick={this.handleCompleteNote.bind(this)}><i className="fa fa-check-circle" aria-hidden="true"></i></button>
        &nbsp; <span style={Object.assign({}, this.props.note.completed && styles.completed)}><span style={styles.inner}>{this.props.note.title}</span></span>
      </li>
    )
  }
}

export default Radium(Note)
