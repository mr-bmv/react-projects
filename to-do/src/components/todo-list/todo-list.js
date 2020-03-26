import React from "react";

import "./todo-list.css";

import ToDoListItem from "../todo-list-item";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const element = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{element}</ul>;
};

export default TodoList;
