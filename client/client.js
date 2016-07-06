import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
  tasks: [{
    id: 0,
    title: 'Simplify your Life!',
    completed: false,
    notes: [{
        id: 0,
        title: 'Be mindful of your notes',
        completed: false
    }]
  }, {
    id: 1,
    title: 'Have at most 3 Main Tasks a day!',
    completed: false,
    notes: [{
      id: 0,
      title: 'Cross them out with the blue-button',
      completed: false
    }, {
      id: 1,
      title: 'Take a screenshot at the end of day!',
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
