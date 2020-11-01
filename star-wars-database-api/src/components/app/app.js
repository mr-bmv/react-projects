import React, { Component } from "react";

// styles
import "./app.css";

// services
import SwapiService from "../../services/swapi-services";

// components
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../../container/ErrorBoundary";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
// import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components/details";
import { SwapiServiceProvider } from "../../context/swapiServiceContext";
import ErrorButton from "../error-button";
import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";

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
        <SwapiServiceProvider value={this.swapiService}>
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

            <PersonDetails itemId={28} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={15} />

            <PersonList />
            <StarshipList />
            <PlanetList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
