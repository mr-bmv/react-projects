import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount = () => {
    const { getData } = this.props
    getData()
      .then(itemList =>
        this.setState({
          itemList
        }))
  };

  renderItems = () => {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    return itemList.map((item) => {
      const { id } = item;
      const text = this.props.renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {text}
        </li>
      );
    });
  };

  render() {
    const person = this.renderItems();
    return <ul className="item-list list-group">{person}</ul>;
  }
}
