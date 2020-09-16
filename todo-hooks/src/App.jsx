import React from 'react';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

function App() {

  const [taskList, setWorkList] = useState([
    { id: 1, title: "first todo", active: true, important: false },
    { id: 2, title: "second todo", active: true, important: false },
    { id: 3, title: "third todo", active: true, important: false },
    { id: 4, title: "fourth todo", active: true, important: false }
  ])

  const onImportant = (id) => {
    onAction(id, "important")
  }

  const onDelete = (id) => {
    onAction(id, "active")
  }

  const onAction = (id, action) => {
    setWorkList(
      taskList.map(task => {
        if (task.id === id) {
          task[action] = !task[action]
        }
        return task
      })
    )
  }

  return (
    <div className="App">
      <TaskList
        taskList={taskList}
        onImportant={onImportant}
        onDelete={onDelete} />
    </div>
  );
}

export default App;
