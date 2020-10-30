import React, { Component } from "react";

import "./item-details.css";

// components
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

// we catch item from child of ItemDetails. See React.cloneElement
const Record = ({ item, field, label }) => {
  return (<li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>)
}

// named export
export {
  Record
}

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null
  };

  componentDidMount = () => {
    this.updateItem();
  };

  componentDidUpdate = prevProps => {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  };

  updateItem = () => {
    const { personId, getData, getImageURL } = this.props;
    if (!personId) {
      return;
    }

    getData(personId).then(item => {
      this.setState({
        item,
        loading: false,
        image: getImageURL(item.id)
      });
    });

  };

  render() {
    if (!this.state.item) {
      return <span>Select any item, please</span>;
    }
    const { item, loading, image } = this.state;
    const { children } = this.props

    const content = !loading ? <Content item={item} image={image} children={children} /> : <Spinner />;

    return <div className="item-details card">{content}</div>;
  }
}

const Content = ({ item, image, children }) => {
  const {
    id,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender
  } = item;

  return (

    <React.Fragment>
      <img
        className="item-image"
        src={image}
        alt="Person"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">

          {/* we need to provide `item` for Record - it is a child of ItemDetails.
 This is the way how we can clone child components and add new properties for it*/}
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item })
          })}

        </ul>
        <div className='btn'>
          <ErrorButton />
        </div>
      </div>
    </React.Fragment>
  );
};
