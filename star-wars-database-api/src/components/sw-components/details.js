import React from 'react'
import SwapiService from "../../services/swapi-services";
import ItemDetails from "../item-details";
import { Record } from '../item-details/item-details';

const swapiService = new SwapiService();

const {
    getPersonImg, getPlanetImg, getStarshipImg,
    getPerson, getPlanet, getStarShip
} = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            personId={itemId}
            getData={getPerson}
            getImageURL={getPersonImg} >

            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    )
};

const PlanetDetails = ({ itemId }) => {
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
};

const StarshipDetails = ({ itemId }) => {
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
};

export {
    PersonDetails, PlanetDetails, StarshipDetails
};