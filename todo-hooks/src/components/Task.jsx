import React from 'react';
import  { useTaskList } from '../context/TaskListContext';

export const Task = ({ task }) => {

    const { onImportant, onDelete, onTask } = useTaskList()

    return (

        (task.active
            &&
            <li style={{ border: 'solid 1px black' }} >
                <span onClick={() => onTask(task.id)}>
                    {task.title}
                </span>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={() => onImportant(task.id)}>
                    Important
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </li>
        )

    )
}