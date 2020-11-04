import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary';
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page/planet-page';
import StarshipPage from '../pages/starship-page/starship-page';

// services
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

// context
import { SwapiServiceProvider } from '../swapi-service-context';

// style
import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService
        : SwapiService
      return { swapiService: new Service() }
    })
  };

  render() {

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route path="/" exact render={() => <h2>Wellcome to Star DB</h2>} />
              <Route path='/people' component={PeoplePage} />
              <Route path='/planets' component={PlanetPage} />
              <Route path='/starships' exact component={StarshipPage} />
              <Route path='/starships/:id'
                render={({ match }) => {
                  console.log(match.params.id)
                  return <StarshipDetails itemId={match.params.id} />
                }} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};