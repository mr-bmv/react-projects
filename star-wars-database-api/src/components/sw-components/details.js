import React from 'react'
import { SwapiServiceConsumer } from '../../context/swapiServiceContext';
import ItemDetails from "../item-details";
import { Record } from '../item-details/item-details';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer >
      {
        (swapiService) => {
          return (
            <ItemDetails
              personId={itemId}
              getData={swapiService.getPerson}
              getImageURL={swapiService.getPersonImg} >

              <Record field="gender" label="Gender" />
              <Record field="birthYear" label="Birth Year" />
              <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
          )
        }
      }

    </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer >
      {
        ({ getPlanet, getPlanetImg }) => {
          return (
            <ItemDetails
              personId={itemId}
              getData={getPlanet}
              getImageURL={getPlanetImg} >

              <Record field="name" label="Name" />
              <Record field="population" label="Population" />
              <Record field="diameter" label="Diameter" />
              <Record field="rotationPeriod" label="Rotation Period" />
            </ItemDetails>
          )
        }
      }

    </SwapiServiceConsumer>
  )
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer >
      {
        ({ getStarShip, getStarshipImg }) => {
          return (
            <ItemDetails
              personId={itemId}
              getData={getStarShip}
              getImageURL={getStarshipImg} >

              <Record field="model" label="Model" />
              <Record field="maxSpeed" label="Max Speed" />
              <Record field="cargoCapacity" label="Capacity" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails, PlanetDetails, StarshipDetails
};