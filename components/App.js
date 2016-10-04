import React, { Component } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
// import UserInfo from '../components/UserInfo'
import Radium from 'radium'

class App extends Component {
  callback(event, item, index, newIndex, list) {
    this.setState({arr: list});
  }
  itemClicked(event, item) {
    this.setState({
      clickedItem: item === this.state.clickedItem ? undefined : item
    });
  }
  itemClicked2(event, item) {
    this.setState({clickedItem2: item});
  }
  disableToggled() {
    this.setState({disableReorder: !this.state.disableReorder});
  }
  prefixChanged(event) {
    var target = event.currentTarget;
    this.setState({prefix: target.value});
  }

  render() {
    let styles = {
      base: {
        background: '#d5c8b8'
      },
      title: {
        color: 'white',
        fontFamily: 'futura',
        fontSize: '3em',
        textShadow: '2px 2px #91a3b0'
      },

      subTitle: {
        position: 'relative',
        marginTop: '-26px',
        color: 'white',
        fontFamily: 'futura',
        fontSize: '10px',
        ':hover': {
          color: 'grey'
        }
      }
    }
    return (
      <div>
        <center>
          <h1 style={styles.title}>POM Todo List</h1>
          <h6 style={styles.subTitle}>Created by <a target="_blank" href="https://github.com/flowstyleliving">@flowstyleliving</a></h6>
        </center>
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
