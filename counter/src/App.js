import React, { Component } from "react";
import "./App.module.css";

class App extends Component {
  state = {
    counter: 0,
  };

  updateCounter(value) {
    this.setState(({counter}) => {
      return { counter: counter + value };
    });
  }

  render() {
    return (
      <div className={"App"}>
        <h1>
          Счетчик <strong>{this.state.counter}</strong>
        </h1>

        <hr />

        <div className="Actions">
          <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
        </div>
      </div>
    );
  }
}

export default App;
