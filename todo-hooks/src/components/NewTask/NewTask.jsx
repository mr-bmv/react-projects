import React from 'react';
import { useState } from 'react';
import { useTaskList } from '../../context/TaskListContext';

import './NewTask.css'

const NewTask = () => {

    const { newItem } = useTaskList()

    const [newTask, setNewTask] = useState('')

    const onChange = (e) => {
        setNewTask(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim()) {
            newItem(newTask)
            setNewTask('')
        }
    }

    return (
        <form className="new-task d-flex" onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Put new task here ..."
                id="inputDefault"
                value={newTask}
                onChange={onChange}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default NewTask;