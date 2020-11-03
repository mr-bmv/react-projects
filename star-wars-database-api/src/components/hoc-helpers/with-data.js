import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';

import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      this.update();
    }

    // if our Service will changed  this component 
    // would be re-render
    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false
      })
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState(
            {
              error: true,
              loading: false
            }
          )
        });
    }

    render() {
      const { data, error, loading } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
