import React from 'react';
import { useTaskList } from '../../context/TaskListContext';

import './TaskFilter.css'

export const TaskFilter = () => {

  const { onFilter, removeTasks } = useTaskList()

  const onAll = (event) => {
    event.preventDefault();
    onFilter('all')
  }

  const onDone = (event) => {
    event.preventDefault();
    onFilter('done')
  }

  const onRemove = (event) => {
    event.preventDefault();
    onFilter('remove')
  }

  const onActive = (event) => {
    event.preventDefault();
    onFilter('active')
  }

  const onCleanRemovedTask = () => {
    removeTasks()
  }

  return (
    <div className="task-filter d-flex">
      <div className="btn-group">
        <button type="button" className="btn btn-outline-primary" onClick={onAll} >All</button>
        <button type="button" className="btn btn-outline-secondary" onClick={onDone}>Closed</button>
        <button type="button" className="btn btn-outline-success" onClick={onActive} >Active</button>
        <button type="button" className="btn btn-outline-danger" onClick={onRemove} >Removed</button>
      </div>

      <div>
        <button type="button" className="btn btn-danger" onClick={onCleanRemovedTask}>Clean Removed Tasks</button>
      </div>
    </div>

  )
}

export default TaskFilter;