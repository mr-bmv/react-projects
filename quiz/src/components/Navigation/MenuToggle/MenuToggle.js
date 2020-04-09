import React from "react";
import "./MenuToggle.css";

const MenuToggle = ({ isOpen, onToggle }) => {
  let cls = ["menu-toggle"];

  cls = isOpen ? cls + " open fa fa-times" : cls + " fa fa-bars";
  return <i className={cls} onClick={onToggle} />;
};

export default MenuToggle;
