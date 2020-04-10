import React from "react";
import classes from "./button.module.css";

const Button = ({ type, onClick, disabled, children }) => {
  const cls = type
    ? [classes.button, classes[type]]
    : [classes.button, classes["primary"]];

  return (
    <button onClick={onClick} className={cls.join(" ")} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
