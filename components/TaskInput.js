import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'

class TaskInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.state.inputText === '') {
      return alert('Please fill in a Task :)')
    } else {
    this.props.addTask(this.state.inputText)
    this.setState({inputText: ''})}
  }

  validateInput(task) {
    if(!task) {
      return 'Please enter a task';
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already exists';
    } else {
      return null;
    }
  }

  render() {
    let styles = {
      button: {
          position: 'absolute',
          background: '#91a3b0',
          height: '46px',
          border: 0,
          borderRadius: 2,
          color: 'white',
          padding: '1em'
      },

      input: {
        position: 'relative',
        width: '200px',
        height: '30px',
        marginLeft: '-50px',
        borderRadius: 4,
        fontSize: '1.1em',
        padding: '7px'
      },

      simplify: {
        color: '#91a3b0',
        fontFamily: 'futura',
      }
    }
    return (
     <center>
     { this.props.tasks.length < 3 ?
       <form onSubmit={this.handleSubmit.bind(this)}>
        <input
         style={styles.input}
         type="text"
         placeholder="Type in your task..."
         value={this.state.inputText}
         onChange={this.handleChange.bind(this)}
       />
       <button style={styles.button} type="submit"><i className="fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i></button>
       </form>
       : <h2 style={styles.simplify}>Simplify or GTFO ;)</h2>}
     </center>
    )
  }

}

export default Radium(TaskInput)
