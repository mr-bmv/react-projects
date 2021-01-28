import React, { Component } from 'react';

// components
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

// reason to use class component here just because there is no hook for replace componentDidCatch
export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
}