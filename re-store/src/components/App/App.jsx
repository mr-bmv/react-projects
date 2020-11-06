import React, { Component } from 'react'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import Spinner from '../Spinner/Spinner'

export default class App extends Component {
    render() {
        return (
            <div>
                <Spinner />
                <ErrorIndicator />
            </div>

        )
    }
};
