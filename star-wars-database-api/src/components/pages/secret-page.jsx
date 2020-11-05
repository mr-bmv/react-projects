import React from 'react'
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

    if (!isLoggedIn) {
        return (
            <Redirect to="/login" />)
    }

    return (
        <div className="jumbotron">
            <h1 className="display-3">This is Secret Page</h1>
            <p className="lead"> Just authenticated person could be content</p>
        </div>
    )
};

export default SecretPage;