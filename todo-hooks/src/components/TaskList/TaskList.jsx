import React from 'react';
import { useTaskList } from '../../context/TaskListContext';
import { Task } from '../Task/Task';

export const TaskList = () => {
    const { list } = useTaskList()

    const content = list.map(task => {
        return (
            <li className="table-default border-secondary list-group-item"
                key={task.id}>
                <Task
                    task={task}
                />
            </li>
        )
    })

    return (
        <ul className="list-group task-list">
            {content}
        </ul>
    )
}

export default TaskList;