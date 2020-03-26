import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearch = event => {
    const term = event.target.value;
    this.setState({ term });
    this.props.search(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        value={this.state.term}
        onChange={this.onSearch}
      />
    );
  }
}
