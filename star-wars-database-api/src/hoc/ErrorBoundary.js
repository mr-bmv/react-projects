import React, { Component } from 'react';
import ErrorIndicator from '../components/error-indicator';

// HOC for encapsulate error in some boundary
export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch = () => {
        this.setState({ hasError: true });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children
    }
}