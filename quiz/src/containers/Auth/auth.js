import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";

export default class Auth extends Component {
  loginHandler = () => {
    console.log("click-click");
  };

  regHandler = () => {
    console.log("reg");
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div className={classes.AuthWrapper}>
          <h1>Authorization</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input label="E-mail" />
            <Input label="Password" errorMessage="TEST" />
            <Button type="success" onClick={this.loginHandler}>
              Log In
            </Button>
            <Button type="primary" onClick={this.regHandler}>
              Registration
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
