import React from 'react';
import TaskListProvider from './context/TaskListContext'

import './App.css'
import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';
import NavBar from './components/NavBar'

function App() {

  return (
    <TaskListProvider>
      <NavBar />
      <div className="app">
        <NewTask />
        <TaskList />
      </div>
    </TaskListProvider>
  );
}

export default App;
