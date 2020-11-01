import React, { Component } from "react";

// styles
import "./app.css";

// services
import SwapiService from "../../services/swapi-services";

// components
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ContentRow from "../../container/ContentRow";
import ErrorBoundary from "../../container/ErrorBoundary";
import { Record } from "../item-details/item-details";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components/details";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showPlanet: true,
    selectedPerson: null,
    hasError: false
  };

  onTogglePlanet = () => {
    this.setState(({ showPlanet }) => {
      return { showPlanet: !showPlanet };
    });
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { showPlanet, selectedPerson } = this.state;
    const content = showPlanet ? <RandomPlanet /> : null;
    const buttonName = showPlanet ? "Hide Random Planet" : "Show Random Planet";

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          {content}

          <div className="row mb2 button-row">
            <button
              type="button"
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.onTogglePlanet}
            >
              {buttonName}
            </button>
            <ErrorButton />
          </div>

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={11} />
          <StarshipDetails itemId={11} />

          <PersonList />
          <StarshipList />
          <PlanetList />
        </div>
      </ErrorBoundary>
    );
  }
}
