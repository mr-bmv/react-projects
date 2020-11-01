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
import ErrorBoundary from "../../container/ErrorBoundary";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components/details";
import { SwapiServiceProvider } from "../../context/swapiServiceContext";
import DummySwapiService from "../../services/dummy-service";

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
            {/* {content} */}

            {/* <div className="row mb2 button-row">
              <button
                type="button"
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.onTogglePlanet}
              >
                {buttonName}
              </button>
              <ErrorButton />
            </div> */}

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <StarshipList />
            <PlanetList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
