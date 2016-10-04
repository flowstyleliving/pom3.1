function getId(tasks) {
  return tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}

function moveUp(tasks) {
  return
}

let taskReducer = function(tasks = [], action) {
  switch (action.type) {
    case 'TASK_UP':
      return tasks.map((task) => {
        let temp = tasks[task.id - 1];
        tasks[task.id] = tasks[task.id - 1];
        tasks[task.id] = temp;
        return Object.assign({}, task)
      })
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
          if(action.taskId !== task.id) {
            return task;
          } else if(action.taskId === task.id) {
              const { notes } = task;
              return Object.assign({}, task, {
                notes: notes.map((note) => {
                  return note.id !== action.noteId ? note : Object.assign({}, note, {
                    completed: !note.completed
                  })
                })
              });
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
