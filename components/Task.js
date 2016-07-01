import React, { Component } from 'react'
import Note from './Note'
import MoveButton from './MoveButton'

import Radium from 'radium'

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: ""
    }
  }


  handleChange(event) {
    this.setState({
      note: event.target.value
    })
  }

  handleNote(event) {
    event.preventDefault()
    if(this.state.note === '') {
      return alert('Please fill in a Note :)')
    } else {
    this.props.actions.addNote(this.state.note, this.props.task.id)
    this.setState({
      note: ""
    })}
  }

  handleComplete() {
    this.props.actions.completeTask(this.props.task.id)
  }

  handleDelete() {
    this.props.actions.deleteTask(this.props.task.id)
  }

  render() {
    let styles = {
      list: {
        padding: '1em',
        listStyleType: 'none',
        fontSize: '1.5em',
        fontFamily: 'futura',
        marginLeft: 'auto',
        marginRight: 'auto'
      },

      base: {
        position: 'relative',
        width: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },

      noteInput: {
        padding: '1px',
        marginLeft: '30px',
        marginBottom: '10px'
      },

      note: {
        textAlign: 'left',
        fontSize: '.6em'
      },

      inner: {
        color: 'black'
      },

      completed: {
        textDecoration: 'line-through',
        color: 'red'
      },

      checkButton: {
        background: 'blue',
        color: 'white',
        border: 0,
        borderRadius: 2,
        padding: '.7em'
      },

      deleteButton: {
        background: 'grey',
        color: 'white',
        border: 0,
        borderRadius: 2,
        padding: '.7em'
      },

      noteButton: {
        background: '#91a3b0',
        border: 0,
        borderRadius: 2,
        color: 'white'
      }
    }
    return (
      <li style={styles.list}>
      <div style={styles.base}>
        <button style={styles.checkButton} onClick={this.handleComplete.bind(this)}><i className="fa fa-check-circle fa-lg" aria-hidden="true"></i></button>
        &nbsp;<span style={Object.assign({}, this.props.task.completed && styles.completed)}><span style={styles.inner}>{this.props.task.title}</span></span>&nbsp;
        <button style={styles.deleteButton} onClick={this.handleDelete.bind(this)}><i className="fa fa-times-circle fa-lg" aria-hidden="true"></i></button>
        <MoveButton actions={this.props.actions} task={this.props.task}/>
            <form onSubmit={this.handleNote.bind(this)}>
              <input
                style={styles.noteInput}
                type="text"
                placeholder="Type in your note..."
                onChange={this.handleChange.bind(this)}
                value={this.state.note}/>
              <button style={styles.noteButton} type="submit"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
            </form>
        <ul style={styles.note}>
          {this.props.task.notes.map((note, i) => {
            return <Note actions={this.props.actions} task={this.props.task} key={`note${i}`} note={note}/>
          })}
        </ul>
        </div>
      </li>
    )
  }
}

export default Radium(Task)
