import React from "react";
import "./button.css";

const Button = ({ onClick, children, type, disabled }) => {
  let cls = "button";
  if (type) {
    cls = cls + `-${type}`;
  }
  console.log(cls);
  console.log({ type });
  return (
    <button onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
