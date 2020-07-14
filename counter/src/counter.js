import React, { Component } from "react";
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return <div style={{ padding: 20, border: "1px solid #ccc" }}>
      <h1>Counter {this.props.counter}</h1>
      <hr />
      <div>
        <button onClick={() => this.props.onChange(100)}>Add</button>
        <button onClick={() => this.props.onChange(-100)}>Sub</button>
      </div>
    </div>;
  }
}

// take state.counter form `rootReducer`
function mapStateToProps(state) {
  console.log("state", state);
  return {
    counter: state.counter2.counter2
  };
}

//
function mapDispatchToProps(dispatch) {
  return {
    onChange: (number) => dispatch({ type: "ADD2", payload: number }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
