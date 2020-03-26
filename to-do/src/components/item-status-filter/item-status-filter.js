import React from "react";

import "./item-status-filter.css";

const ItemStatusFilter = ({ filter, onFilter }) => {
  const buttonsData = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? "btn btn-info" : "btn btn-outline-secondary";
    return (
      <button
        type="button"
        className={clazz}
        key={name}
        onClick={() => onFilter(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default ItemStatusFilter;
