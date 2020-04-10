import React from "react";
import "./drawer.css";
import Backdrop from "../../UI/BackDrop/BackDrop";

const links = [1, 2, 3];

const Drawer = ({ isOpen, onClose }) => {
  const cls = isOpen ? "drawer" : "drawer close";

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className={cls}>
        <ul>{renderLinks()}</ul>
      </nav>
      {isOpen ? <Backdrop onClick={onClose} /> : null}
    </React.Fragment>
  );
};

export default Drawer;
