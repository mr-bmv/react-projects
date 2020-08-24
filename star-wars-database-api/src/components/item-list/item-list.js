import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    personList: null
  };

  componentDidMount = () => {

    const { getData } = this.props
    getData()
      .then(personList =>
        this.setState({
          personList
        })
      );
  };

  renderPersons = () => {
    const { personList } = this.state;
    if (!personList) {
      return <Spinner />;
    }
    return personList.map(({ id, name }) => {
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
    const person = this.renderPersons();
    return <ul className="item-list list-group">{person}</ul>;
  }
}
