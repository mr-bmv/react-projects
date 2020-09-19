import React from 'react';
import { useTaskList } from '../context/TaskListContext';

export const NavBar = () => {

  const { getSearchTask, onFilter } = useTaskList()

  const onAll = (event) => {
    console.log('start allFunction');
    event.preventDefault();
    onFilter('all')
  }

  const onDone = (event) => {
    console.log('start DoneFunction');
    event.preventDefault();
    onFilter('done')
  }

  const onActive = (event) => {
    console.log('start ActiveFunction');
    event.preventDefault();
    onFilter('active')
  }

  const findTask = (e) => {
    getSearchTask(e.target.value);
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a className="navbar-brand" href="#">TaskList</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          onChange={findTask}
        />
        <button
          className="btn btn-secondary my-2 my-sm-0"
          type="submit"
          onClick={onAll}
        >
          All
        </button>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit"
          onClick={onDone}
        >
          Done
        </button>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit"
          onClick={onActive}
        >
          Active
        </button>
      </form>
    </nav>
  )
}

export default NavBar;