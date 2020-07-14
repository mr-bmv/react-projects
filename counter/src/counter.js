import React, { Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
  render() {
    return <div stuly={{ padding: 20, border: "1px solid #ccc" }}>
        <h1>Counter 0</h1>
        <hr/>
        <div>
            <button>Add</button>
            <button>Sub</button>
        </div>
    </div>;
  }
}

export default Counter;
