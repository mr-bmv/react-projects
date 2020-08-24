import React, { Component } from "react";
import "./people-page.css";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";

// container
// create container when some of layout would be re-used
// each container should be React element
// we can take from `props` or destructuring it in parameters

const PeopleContainer = ({ leftSide, rightSide }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {leftSide}
      </div>
      <div className="col-md-6">
        {rightSide}
      </div>
    </div>
  )
}

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children
  }
}


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
        <PersonDetails personId={selectedPerson} />
      </ErrorBoundary >

    return (
      <PeopleContainer leftSide={itemList} rightSide={itemDetails} />
    );
  }
}
