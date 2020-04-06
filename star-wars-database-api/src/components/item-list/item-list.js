import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    itemList: null
  };

  componentDidMount = () => {
    const { getData } = this.props;

    getData().then(itemList =>
      this.setState({
        itemList
      })
    );
  };

  renderItem = () => {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    return itemList.map(({ id, name }) => {
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const person = this.renderItem();
    return <ul className="item-list list-group">{person}</ul>;
  }
}
