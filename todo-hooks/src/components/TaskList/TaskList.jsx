import React from 'react';
import { useTaskList } from '../../context/TaskListContext';
import { Task } from '../Task/Task';

export const TaskList = () => {
    const { taskList } = useTaskList()

    return (
        <ul className="list-group task-list">
            {taskList.map(task => {
                console.log(task)
                if (task.active) {
                    return (
                        <li className="list-group-item"
                            key={task.id}>
                            <Task
                                task={task}
                            />
                        </li>
                    )
                }
                return null
            })}
        </ul>
    )
}

export default TaskList;