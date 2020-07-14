import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.module.css";
import Counter from "./counter";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>

        <hr />

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={() => this.props.onAddNumber(100)}>ADD 100</button>
        </div>
        <Counter />
      </div>
    );
  }
}

// take state.counter form rootReducer
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

//
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: "ADD" }),
    onSub: () => dispatch({ type: "SUB" }),
    onAddNumber: (number) => dispatch({ type: "ADD_NUMBER", payload: number }),
  };
}

//  it get two @params
export default connect(mapStateToProps, mapDispatchToProps)(App);
