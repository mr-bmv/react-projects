import React from "react";
import classes from "./select.module.css";

const Select = ({ label, value, onChange, options }) => {
  const htmlFor = `${label}-${Math.random()}`;

  const renderContent = () => {
    return options.map((option, index) => {
      return (
        <option value={option.value} key={option.value + index}>
          {option.text}
        </option>
      );
    });
  };

  const content = renderContent();
  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={htmlFor} value={value} onChange={onChange}>
        {content}
      </select>
    </div>
  );
};

export default Select;
