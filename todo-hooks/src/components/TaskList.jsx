import React from 'react';
import { Task } from './Task';

export const TaskList = ({ taskList, onImportant, onDelete, onTask }) => {

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