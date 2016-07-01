let actions = {
  taskUp: (id) => {
    return {
      type: 'TASK_UP',
      id: id
    }
  },
  addNote: (title, id) => {
    return {
      type: 'ADD_NOTE',
      title: title,
      id: id
    }
  },
  completeNote: (taskId, noteId) => {
    return {
      type: 'COMPLETE_NOTE',
      taskId: taskId,
      noteId: noteId,
    }
  },
  addTask: function(text) {
    return {
      type: 'ADD_TASK',
      text: text
    }
  },
  completeTask: function(id) {
    return {
      type: 'COMPLETE_TASK',
      id: id
    }
  },
  deleteTask: function(id) {
    return {
      type: 'DELETE_TASK',
      id: id
    }
  },
  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.floor(Math.random() * 100)
    }
  },
  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const {user} = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },
  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2000)
    }
  }
}

export default actions
