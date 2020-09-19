import React from 'react';
import { useTaskList } from '../../context/TaskListContext';
import { Task } from '../Task/Task';

export const TaskList = () => {
    const { data } = useTaskList()

    console.log('->', data);

    const filterIt = (data, filter) => {
        switch (filter) {
            case 'all':
                return data

            case 'done':
                return data.filter(task => task.done)

            case 'active':
                return data.filter(task => !task.done)

            default:
                return data
        }
    }

    const list = filterIt(data.tasks, data.filter)

    return (
        <ul className="list-group task-list">
            {list.map(task => {
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