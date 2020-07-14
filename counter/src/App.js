import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.module.css";
import Counter from "./counter";
import { add, sub, addNumber, asyncAdd } from "./redux/action/action";

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

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(3)}>Add in 3 seconds</button>
        </div>

        <Counter />
      </div>
    );
  }
}

// take state.counter form `rootReducer`
function mapStateToProps(state) {
  console.log("State OLD ", state);
  return {
    counter: state.counter1.counter,
  };
}

//
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: (number) => dispatch(addNumber(number)),
    onAsyncAdd: (number) => dispatch(asyncAdd(number))
  };
}

//  it get two @params
export default connect(mapStateToProps, mapDispatchToProps)(App);
