import React from 'react';
import { useState } from 'react';
import { useTaskList } from '../../context/TaskListContext';

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
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Put new task here ..." id="inputDefault" value={newTask}
                    onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default NewTask;