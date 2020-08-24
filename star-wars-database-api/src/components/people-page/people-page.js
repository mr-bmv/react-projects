import React, { Component } from "react";
import "./people-page.css";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = { selectedPerson: null, hasError: false };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { selectedPerson } = this.state;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={(item) => (`${item.name} (${item.gender})`)} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
