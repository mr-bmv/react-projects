import React from "react";
import "./BackDrop.css";

const Backdrop = ({ onClick }) => (
  <div className="back-drop" onClick={onClick} />
);

export default Backdrop;
