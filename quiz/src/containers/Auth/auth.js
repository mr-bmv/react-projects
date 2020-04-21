import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";

export default class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Incorrect E-mail",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Incorrect Password",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };
  loginHandler = () => {
    console.log("click-click");
  };

  regHandler = () => {
    console.log("reg");
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  onChangeHandler = (event, credential) => {
    console.log(event.target.value, "-", credential);
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((credential, index) => {
      const control = this.state.formControls[credential];
      return (
        <Input
          key={credential + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, credential)}
        />
      );
    });
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div className={classes.AuthWrapper}>
          <h1>Authorization</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {/* <Input label="E-mail" />
            <Input label="Password" errorMessage="TEST" /> */}
            {this.renderInputs()}
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
