import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";

export default class QuizList extends Component {
  tests = [1, 2, 3];

  renderList = () => {
    return this.tests.map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Quiz №{quiz}</NavLink>
        </li>
      );
    });
  };
  render() {
    return (
      <div className={classes.QuizList}>
        <div style={{ width: "600px" }}>
          <h1>Choose your Quiz</h1>
          <div
            style={{
              padding: "20px",
              color: "#fff",
              borderRadius: "10px",
              margin: "0 10px",
              boxSizing: "border-box",
              backgroundImage: "linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)",
            }}
          >
            <span>List of Tests:</span>
            {/* <nav> */}
            <ul>{this.renderList()}</ul>
            {/* </nav> */}
          </div>
        </div>
      </div>
    );
  }
}
