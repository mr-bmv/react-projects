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

    const personDetails = (
      <ItemDetails
        personId={11}
        getData={this.swapiService.getPerson}
        getImageURL={this.swapiService.getPersonImg} >

        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        personId={12}
        getData={this.swapiService.getStarShip}
        getImageURL={this.swapiService.getStarshipImg} >

        <Record field="model" label="Model" />
        <Record field="maxSpeed" label="Max Speed" />
        <Record field="cargoCapacity" label="Capacity" />
      </ItemDetails>
    )

    const planetDetails = (
      <ItemDetails
        personId={12}
        getData={this.swapiService.getPlanet}
        getImageURL={this.swapiService.getPlanetImg} >

        <Record field="name" label="Name" />
        <Record field="population" label="Population" />
        <Record field="diameter" label="Diameter" />
        <Record field="rotationPeriod" label="Rotation Period" />
      </ItemDetails>
    )

    return (
      <ErrorBoundary>
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

          <PeoplePage />

          <ContentRow leftSide={personDetails} rightSide={planetDetails} />

          {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => <span>{item.name} {item.population}</span>} />
          </div>
          <div className="col-md-6">
            <ItemDetails personId={selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarShips}
              renderItem={(item) => `${item.name} _ ${item.model}`} />
          </div>
          <div className="col-md-6">
            <ItemDetails personId={selectedPerson} />
          </div>
        </div> */}
        </div>
      </ErrorBoundary>
    );
  }
}
