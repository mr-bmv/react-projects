import React from 'react';
import { useTaskList } from '../context/TaskListContext';
import { Task } from './Task';

export const TaskList = () => {
    const {taskList} = useTaskList()

    return (
        <div >
            {taskList.map(task => {
                console.log(task)
                return (
                    <ul key={task.id}>
                        <Task
                            task={task}
                        />
                    </ul>
                )
            })}
        </div>
    )
}

export default TaskList;