import React, { Component } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import Spinner from '../Spinner/Spinner'

export default class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Spinner />
            </ErrorBoundary>
        )
    }
};
