import React from 'react';
import TaskListContext from '../context/TaskListContext';
import { useContext } from 'react';

export const Task = ({ task }) => {

    const { onImportant, onDelete, onTask } = useContext(TaskListContext)

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