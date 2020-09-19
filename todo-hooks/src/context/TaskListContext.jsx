import React, { useState } from 'react';
import { useContext } from 'react';

const TaskListContext = React.createContext()

export const useTaskList = () => {
    return useContext(TaskListContext)
}

export const TaskListProvider = ({ children }) => {

    const [taskList, setTaskList] = useState({
        tasks: [
            { id: 1, title: "first todo", active: true, important: false, done: false },
            { id: 2, title: "second todo", active: true, important: false, done: false },
            { id: 3, title: "third todo", active: true, important: false, done: false },
            { id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", active: true, important: false, done: false }
        ],
        newTask: '',
        filter: 'all'
    })

    const onAction = (id, action) => {

        let newValue = taskList.tasks.map(task => {
            if (task.id === id) {
                task[action] = !task[action]
            }
            console.log('task - ', task);
            return task
        })

        setTaskList({
            ...taskList,
            tasks: newValue
        })
    }

    const onImportant = (id) => {
        onAction(id, "important")
    }

    const onDelete = (id) => {
        onAction(id, "active")
    }

    const onTask = (id) => {
        onAction(id, "done")
    }

    const taskTemplate = {
        id: Date.now(), title: '', active: true, important: false, done: false
    }

    const newItem = (title) => {
        const newTask = { ...taskTemplate, title }
        const newTaskList = [...taskList.tasks, newTask]
        setTaskList({ ...taskList, tasks: newTaskList })
    }

    const getSearchTask = (task) => {
        console.log('im from context -', task)
        setTaskList({
            ...taskList,
            newTask: task
        })
    }

    const onFilter = (filter) => {
        console.log(filter);
        setTaskList({
            ...taskList,
            filter
        })
    }

    console.log(taskList);
    return (
        <TaskListContext.Provider value={{
            data: taskList,
            onImportant, onDelete, onTask, newItem, getSearchTask, onFilter
        }}>
            {children}
        </TaskListContext.Provider>
    )
}


export default TaskListProvider;