import React, { Component } from "react";
import classes from "./drawer.module.css";
import Backdrop from "../../UI/BackDrop/BackDrop";
import { NavLink } from "react-router-dom";


class Drawer extends Component {

  renderLinks = (links) => {
    return links.map(({ id, path, label, exact }) => {
      return (
        <li key={id}>
          <NavLink
            to={path}
            exact={exact}
            activeClassName={classes.active}
            onClick={this.props.onClose}
          >
            {label}
          </NavLink>
        </li>
      );
    });
  };
  render() {

    const cls = [classes.drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    // organize different links for different status of user(authenticated and non)
    // set of links which will be shown in menu
    const links = [
      { id: 1, path: "/", label: "Home Page", exact: true }
    ];

    if (this.props.isAuthenticated) {
      links.push({ id: 3, path: "/quiz-creator", label: "Creat New Quiz", exact: false })
      links.push({ id: 4, path: "/logout", label: "Log Out", exact: false })
    } else {
      links.push(
        { id: 2, path: "/auth", label: "Log In", exact: false }
      )

    }


    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  };
}


export default Drawer;
