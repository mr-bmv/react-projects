import React from 'react';
import TaskListProvider from './context/TaskListContext'

import './App.css'
import TaskList from './components/TaskList/TaskList';

function App() {

  return (
    <TaskListProvider>
      <div className="app">
        <TaskList />
      </div>
    </TaskListProvider>
  );
}

export default App;
