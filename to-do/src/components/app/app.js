import React, { Component } from "react";

import "./app.css";

// components
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

export default class App extends Component {
  maxId = 1000;

  createToDoItem = label => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  state = {
    toDoData: [
      this.createToDoItem("Drink Coffee"),
      this.createToDoItem("Create React App"),
      this.createToDoItem("Learn react")
    ],
    term: "",
    filter: "all"
  };

  deleteItem = id => {
    this.setState(({ toDoData }) => {
      const indx = toDoData.findIndex(el => el.id === id);
      const before = toDoData.slice(0, indx);
      const after = toDoData.slice(indx + 1);
      return {
        toDoData: [...before, ...after]
      };
    });
  };

  addItem = text => {
    this.setState(({ toDoData }) => {
      const item = this.createToDoItem(text);

      return { toDoData: [...toDoData, item] };
    });
  };

  onToggleEvent = (id, event) => {
    this.setState(({ toDoData }) => {
      const indx = toDoData.findIndex(el => el.id === id);

      const oldItem = toDoData[indx];

      const newItem = { ...oldItem };
      newItem[event] = !oldItem[event];

      return {
        toDoData: [
          ...toDoData.slice(0, indx),
          newItem,
          ...toDoData.slice(indx + 1)
        ]
      };
    });
  };

  onToggleImportant = id => {
    this.onToggleEvent(id, "important");
  };

  onToggleDone = id => {
    this.onToggleEvent(id, "done");
  };

  search = (data, term) => {
    if (term) {
      return data.filter(
        item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    } else {
      return data;
    }
  };

  filterItem = (data, filter) => {
    switch (filter) {
      case "all":
        return data;
      case "active":
        return data.filter(item => !item.done);
      case "done":
        return data.filter(item => item.done);
      default:
        return data;
    }
  };

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { toDoData, term, filter } = this.state;
    const visibleItems = this.filterItem(this.search(toDoData, term), filter);

    const doneCount = toDoData.filter(item => item.done).length;
    const toDoCount = toDoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel search={this.onSearchChange} />
          <ItemStatusFilter filter={filter} onFilter={this.onFilterChange} />
        </div>
        <AddItem onItemAdded={this.addItem} />

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
}
