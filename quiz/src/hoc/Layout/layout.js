import React, { Component } from "react";
import classes from "./layout.module.css";

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.layout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}