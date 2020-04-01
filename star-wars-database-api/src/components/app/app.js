import React, { Component } from "react";

import SwapiService from "../../services/swapi-services";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list";

import "./app.css";

export default class App extends Component {
  state = {
    showPlanet: true,
    selectedPerson: null,
    hasError: false
  };

  swapiService = new SwapiService();

  onTogglePlanet = () => {
    this.setState(({ showPlanet }) => {
      return { showPlanet: !showPlanet };
    });
  };

  componentDidCatch = () => {
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

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList getData={this.swapiService.getAllPlanets} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList getData={this.swapiService.getAllStarShips} />
          </div>
        </div>
      </div>
    );
  }
}
