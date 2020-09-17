import React, { useState } from 'react';
import { useContext } from 'react';

const TaskListContext = React.createContext()

export const useTaskList = () =>{
    return useContext(TaskListContext)
}

export const TaskListProvider = ({ children }) => {

    const [taskList, setWorkList] = useState([
        { id: 1, title: "first todo", active: true, important: false, done: false },
        { id: 2, title: "second todo", active: true, important: false, done: false },
        { id: 3, title: "third todo", active: true, important: false, done: false },
        { id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", active: true, important: false, done: false }
    ])

    const onAction = (id, action) => {
        setWorkList(
            taskList.map(task => {
                if (task.id === id) {
                    task[action] = !task[action]
                }
                return task
            })
        )
    }

    const onImportant = (id) => {
        onAction(id, "important")
    }

    const onDelete = (id) => {
        setWorkList(
            taskList.map(task => {
                if (task.id === id) {
                    task.active = !task.active
                }
                return task
            })
        )
    }

    const onTask = (id) => {
        onAction(id, "done")
    }

    return (
        <TaskListContext.Provider value={{
            taskList,
            onImportant, onDelete, onTask
        }}>
            {children}
        </TaskListContext.Provider>
    )
}


export default TaskListProvider;