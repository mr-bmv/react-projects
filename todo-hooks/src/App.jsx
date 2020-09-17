import React from 'react';
import TaskList from './components/TaskList';
import TaskListProvider from './context/TaskListContext'

function App() {

  return (
    <TaskListProvider>
      <div className="App">
        <TaskList />
      </div>
    </TaskListProvider>
  );
}

export default App;
