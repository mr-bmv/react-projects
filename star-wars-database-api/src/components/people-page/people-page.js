import React, { Component } from "react";
import "./people-page.css";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import ContentRow from "../../container/ContentRow";
import ErrorBoundary from "../../container/ErrorBoundary";
import { Record } from "../item-details/item-details";

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
        renderItem={(item) => (`${item.name} (${item.gender})`)} />

    const itemDetails =
      <ErrorBoundary>
        <ItemDetails
          personId={selectedPerson}
          getData={this.swapiService.getPerson}
          getImageURL={this.swapiService.getPersonImg} >

          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
      </ErrorBoundary >

    return (
      <ContentRow leftSide={itemList} rightSide={itemDetails} />
    );
  }
}
