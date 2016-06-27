import React, { Component } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
// import UserInfo from '../components/UserInfo'
import Radium from 'radium'

class App extends Component {

  render() {
    let styles = {
      base: {
        background: '#d5c8b8'
      },
      title: {
        color: 'white',
        fontFamily: 'futura',
        fontSize: '3em',
        ':hover': {
          color: 'black'
        }
      }
    }
    return (
      <div>
        <center><h1 style={styles.title}>POM Todo List</h1></center>
        {Radium.getState(this.state, ':hover') ? (
          <span></span>
        ): null}
        {/*<UserInfo user={this.props.user} actions={this.props.actions}/>*/}
        <TaskInput tasks={this.props.tasks} addTask={this.props.actions.addTask}/>
        <TaskList actions={this.props.actions} tasks={this.props.tasks}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Radium(App))
