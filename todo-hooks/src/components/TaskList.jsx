import React from 'react';
import { Task } from './Task';

export const TaskList = ({ taskList, onImportant, onDelete }) => {

    return (
        <div>
            {taskList.map(task => {
                console.log(task)
                return (
                    <div key={task.id}>
                        <Task
                            task={task}
                            onImportant={onImportant}
                            onDelete={onDelete} />
                    </div>
                )
            })}
        </div>


    )
}