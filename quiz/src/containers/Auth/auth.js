import React, { Component } from "react";

import classes from "./Auth.module.css";

// components
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";
import { connect } from "react-redux";
import { auth } from "../../store/actions/auth";

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

class Auth extends Component {
    state = {
        isFormValid: false,
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
                errorMessage: "Incorrect Password - minimal length 6 symbols",
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
        // take from "https://firebase.google.com/docs/reference/rest/auth#section-create-email-password"
        // except API_KEY need to add info from Setting of your project. Go to your firebase Setting and choose " API for WEB App"
        // returnSecureToken - parameter which is required by firebase

        this.props.auth(this.state.formControls.email.value, this.state.formControls.password.value, true)

        // const authData = {
        //     email: this.state.formControls.email.value,
        //     password: this.state.formControls.password.value,
        //     returnSecureToken: true,
        // };
        // try {
        //     const response = await axios.post(
        //         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAP1VZN1fKWhEh-eeWISrOeBpK7oaOVKCs",
        //         authData
        //     );
        //     console.log(response.data);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    registerHandler = () => {
        console.log("reg");
        // take from "https://firebase.google.com/docs/reference/rest/auth#section-create-email-password"
        // except API_KEY need to add info from Setting of your project. Go to your firebase Setting and choose " API for WEB App"
        // returnSecureToken - parameter which is required by firebase

        this.props.auth(this.state.formControls.email.value, this.state.formControls.password.value, false)

        // const authData = {
        //     email: this.state.formControls.email.value,
        //     password: this.state.formControls.password.value,
        //     returnSecureToken: true,
        // };
        // try {
        //     const response = await axios.post(
        //         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAP1VZN1fKWhEh-eeWISrOeBpK7oaOVKCs",
        //         authData
        //     );
        //     console.log(response.data);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    submitHandler = (event) => {
        event.preventDefault();
    };

    validateCredential = (value, rule) => {
        if (!rule) {
            return true;
        }

        let isValid = true;
        if (rule.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rule.email) {
            isValid = validateEmail(value) && isValid;
        }

        if (rule.minLength) {
            isValid = value.trim().length >= rule.minLength && isValid;
        }

        return isValid;
    };

    onChangeHandler = (event, credential) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[credential] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateCredential(control.value, control.validation);

        formControls[credential] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach((input) => {
            isFormValid = formControls[input].valid && isFormValid;
        });

        this.setState({ formControls, isFormValid });
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
                    <form onSubmit={this.submitHandler}>
                        {/* <Input label="E-mail" />
            <Input label="Password" errorMessage="TEST" /> */}
                        {this.renderInputs()}
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Log In
            </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Registration
            </Button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}
export default connect(null, mapDispatchToProps)(Auth)