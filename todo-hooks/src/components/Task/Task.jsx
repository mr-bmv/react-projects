import React from 'react';
import { useTaskList } from '../../context/TaskListContext';

import './Task.css'

export const Task = ({ task }) => {

    const { onImportant, onDelete, onTask } = useTaskList()

    let className = 'task-list-item'

    if (task.done) {
        className += ' done'
    }

    if (task.important) {
        className += " important"
    }

    return (
        <span className={className}>
            <span className='task-list-item-title'
                onClick={() => onTask(task.id)}>
                {task.title}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={() => onImportant(task.id)}>
                <i className="fa fa-exclamation" />
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={() => onDelete(task.id)}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}