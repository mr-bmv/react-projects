import React, { Component } from "react";
import "./people-page.css";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import ContentRow from "../../container/ContentRow";
import ErrorBoundary from "../../hoc/ErrorBoundary";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  
  state = { selectedPerson: null };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;

    const itemList =
      <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => (`${item.name} (${item.gender})`)} />

    const itemDetails =
      <ErrorBoundary>
        <ItemDetails personId={selectedPerson} />
      </ErrorBoundary >

    return (
      <ContentRow leftSide={itemList} rightSide={itemDetails} />
    );
  }
}
