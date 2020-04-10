import React from "react";
import "./drawer.css";

const links = [1, 2, 3];

const Drawer = ({ isOpen }) => {
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
    <nav className={cls}>
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default Drawer;
