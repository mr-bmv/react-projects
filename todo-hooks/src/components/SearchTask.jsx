import React from 'react';
import { useTaskList } from '../context/TaskListContext';

const SearchTask = () => {

    const { getSearchTask } = useTaskList()

    return (
        <form className="form-group">
            <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search Task"
                onChange={(e) => getSearchTask(e.target.value)}
            />
        </form>
    )
}

export default SearchTask;