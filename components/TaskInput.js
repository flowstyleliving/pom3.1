import React, { Component } from 'react'
import Radium from 'radium'

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
    this.props.addTask(this.state.inputText)
    this.setState({inputText: ''})
  }

  render() {
    let styles = {
      button: {
          position: 'absolute',
          height: '52px',
          marginTop: '1px',
          border: 0,
          borderRadius: 2,
          color: 'white',
          padding: '1em'
      }, input: {
        position: 'relative',
        width: '200px',
        height: '30px',
        marginLeft: '-50px',
        borderRadius: 4,
        fontSize: '1em',
        padding: '10px'
      }
    }
    return (
      <center>
      <form onSubmit={this.handleSubmit.bind(this)}>
       <input
          style={styles.input}
          type="text"
          placeholder="Type in your task..."
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        /> &nbsp;
        <button style={styles.button} type="submit"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
        </form>
      </center>
    )
  }

}

export default Radium(TaskInput)
