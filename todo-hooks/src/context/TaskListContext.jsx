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
        searchTask: '',
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
        id: Date.now(),
        title: '',
        active: true,
        important: false,
        done: false
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
            searchTask: task
        })
    }

    const onFilter = (filter) => {
        console.log(filter);
        setTaskList({
            ...taskList,
            filter
        })
    }

    const removeTasks = () => {
        const newTaskList = taskList.tasks.filter(task => task.active)
        console.log('newTaskList - ', newTaskList);
        setTaskList((taskList) => {
            return ({
                ...taskList,
                tasks: newTaskList
            })
        })
    }

    const filterIt = (data, filter) => {
        console.log('Filter');
        console.log('data - ', data);
        console.log('action - ', filter);
        switch (filter) {
            case 'all':
                return data.filter(task => task.active)

            case 'done':
                return data.filter(task => task.active && task.done)

            case 'active':
                return data.filter(task => task.active && !task.done)

            case 'remove':
                return data.filter(task => !task.active)

            default:
                return data
        }
    }

    const searchList = (data, action) => {
        if (action) {
            return data.filter(
                task => task.title.toLowerCase().indexOf(action.toLowerCase()) > -1
            );
        } else {
            return data;
        }
    }

    const activeQTY = () => {

        const qty = taskList.tasks.filter(task => task.active && !task.done).length;
        console.log("QTY - ", qty);
        return qty;
    }

    const doneQTY = () => {

        const qty = taskList.tasks.filter(task => task.active && task.done).length;
        console.log("QTY - ", qty);
        return qty;
    }

    const list = filterIt(searchList(taskList.tasks, taskList.searchTask), taskList.filter)

    return (
        <TaskListContext.Provider value={{
            data: taskList,
            list,
            onImportant,
            onDelete,
            onTask,
            newItem,
            getSearchTask,
            onFilter,
            removeTasks,
            activeQTY,
            doneQTY
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider;