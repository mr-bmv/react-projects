import React from "react";
import classes from "./input.module.css";

const isInvalid = (valid, touched, shouldValidate) => {
  return !valid && shouldValidate && touched;
};

const Input = ({
  type,
  label,
  value,
  onChange,
  errorMessage,
  valid,
  touched,
  shouldValidate,
}) => {
  const inputType = type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(valid, touched, shouldValidate)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />
      {isInvalid(valid, touched, shouldValidate) ? (
        <span>{errorMessage || "Please, fill in the form correctly"}</span>
      ) : null}
    </div>
  );
};

export default Input;
