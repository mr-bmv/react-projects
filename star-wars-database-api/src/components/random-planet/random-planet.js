import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";

import "./random-planet.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount = () => {
    this.updatePlanet();
    this.intreval = setInterval(this.updatePlanet, 3000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intreval);
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
    // this.swapiService.getStarShip(id).then(body => console.log(body));
  };

  render() {
    const { planet, loading, error } = this.state;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading && !error ? <Content planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}

const Content = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="Random Planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
