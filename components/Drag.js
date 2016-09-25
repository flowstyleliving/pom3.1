import React, { Component } from 'react'
import Reorder from 'react-reorder'
import TaskList from './TaskList'

export default class Drag extends Component {
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

  render(){
    return (
      <Reorder
        itemKey={'task${i}'}
        lock='horizontal'
        holdTime='0'
        list={TaskList}
        template='Drag'
        callback={this.callback}
        itemClicked={this.itemClicked}
        selectedKey='uuid'
        disableReorder={false}/>

    )
  }
}
