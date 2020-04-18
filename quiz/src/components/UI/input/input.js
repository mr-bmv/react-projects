import React from "react";
import classes from "./input.module.css";

const Input = ({ type, label, value, onChange, errorMessage }) => {
  const inputType = type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
