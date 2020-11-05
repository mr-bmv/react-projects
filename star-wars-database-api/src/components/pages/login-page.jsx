import React from 'react'
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogIn }) => {

    if (isLoggedIn) {
        return (
            <Redirect to="/" />)
    }

    return (
        <div className="jumbotron">
            <h2 className="display-3">Login, please</h2>
            <p className="lead">To see secret page you need to log in</p>
            <hr className="my-4" />
            <p className="lead">
                <button className="btn btn-primary btn-lg"
                    onClick={onLogIn}>Log In</button>
            </p>
        </div>
    )
};

export default LoginPage;