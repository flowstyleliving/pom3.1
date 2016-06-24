function getId(tasks) {
  return tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}

let taskReducer = function(tasks = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return tasks.map((task) => {
          if(action.id !== task.id) {
              return task;
          }

          const { notes } = task;
          const { title } = action;
          const newNotes = notes.concat({id : notes.length, title});

          const newTask = Object.assign({}, task, {notes : newNotes});

          return newTask;
      })
    case 'COMPLETE_NOTE':
      return tasks.map((task) => {
          if(action.id !== task.id) {
            return task;
          } else if(action.id === task.id) {
            const { notes } = task;
            notes.map((note) => {
              return Object.assign({}, task, {note: {completed: !note.completed}});
            })
          }
        })
    case 'ADD_TASK':
      return [{
          title: action.text,
          completed: false,
          id: getId(tasks),
          notes: []
        }, ...tasks]
    case 'COMPLETE_TASK':
      return tasks.map((task) => {
          return task.id === action.id ?
            Object.assign({}, task, {completed: !task.completed}) : task
        })
    case 'DELETE_TASK':
      return tasks.filter((task) => {
          return task.id !== action.id
        })
    default:
      return tasks;
  }
}

export default taskReducer
