import React from "react";
import { useTaskList } from "../../context/TaskListContext";

import './Header.css'

const Header = () => {

    const { activeQTY, doneQTY } = useTaskList()

    return (
        <div className="header d-flex">
            <h1>Task List</h1>
            <h3>{activeQTY()} more to do, {doneQTY()} closed</h3>
        </div>
    );
};

export default Header;