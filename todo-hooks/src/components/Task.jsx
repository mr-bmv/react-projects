import React from 'react';

export const Task = ({ task, onImportant, onDelete }) => {

    return (

        (task.active
            &&
            <div>
                <ul>{task.title}
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
                </ul>
            </div>)

    )
}