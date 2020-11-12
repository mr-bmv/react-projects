import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// components
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary';
import PeoplePage from '../pages/people-page';
import SecretPage from '../pages/secret-page';
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
import LoginPage from '../pages/login-page';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService
        : SwapiService
      return { swapiService: new Service() }
    })
  };
  onLogIn = () => {
    this.setState({ isLoggedIn: true })
  }

  render() {

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route exact path="/" render={() => <h2>Welcome to Star DB</h2>} />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets' component={PlanetPage} />
                <Route path='/starships' exact component={StarshipPage} />
                <Route path='/starships/:id'
                  render={({ match }) => {
                    console.log(match.params.id)
                    return <StarshipDetails itemId={match.params.id} />
                  }} />
                <Route path='/secret'
                  render={() => {
                    return <SecretPage isLoggedIn={this.state.isLoggedIn} />
                  }} />
                <Route path='/login'
                  render={() => {
                    return <LoginPage
                      isLoggedIn={this.state.isLoggedIn}
                      onLogIn={this.onLogIn} />
                  }}
                />
                {/* if page was NOT found */}
                {/* could use just Redirect to some page */}
                {/* <Redirect to='/' /> */}

                {/* or will used last route w/o path */}
                <Route
                  render={() => <h2>Page Not Found</h2>} />
              </Switch>
            </div>
          </Router>

        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};