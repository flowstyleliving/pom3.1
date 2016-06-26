import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// let initialState = {
//   todos: [{
//     id: 0,
//
//     text: 'Initial todo for demo purposes'
//   }],
//

let initialState = {
  tasks: [{
    id: 0,
    title: 'do this',
    completed: false,
    notes: [{
      id: 0,
      title: 'note1',
      completed: false
    }]
  }, {
    id: 1,
    title: 'yes',
    completed: false,
    notes: [{
      id: 0,
      title: 'Love is True when Truth is Love',
      completed: false
    }, {
      id: 1,
      title: 'Peace',
      completed: false
    }]
    }
  ],
  user: {
      username: 'se_ohm',
      id: 64
    }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
