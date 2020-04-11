import React from "react";
import classes from "./drawer.module.css";
import Backdrop from "../../UI/BackDrop/BackDrop";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, path: "/", label: "Home Page", exact: true },
  { id: 2, path: "/auth", label: "Log In", exact: false },
  { id: 3, path: "/quiz-creator", label: "Creat New Quiz", exact: false },
];

const Drawer = ({ isOpen, onClose }) => {
  const cls = [classes.drawer];

  if (!isOpen) {
    cls.push(classes.close);
  }

  const renderLinks = () => {
    return links.map(({ id, path, label, exact }) => {
      return (
        <li key={id}>
          <NavLink
            to={path}
            exact={exact}
            activeClassName={classes.active}
            onClick={onClose}
          >
            {label}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks()}</ul>
      </nav>
      {isOpen ? <Backdrop onClick={onClose} /> : null}
    </React.Fragment>
  );
};

export default Drawer;
