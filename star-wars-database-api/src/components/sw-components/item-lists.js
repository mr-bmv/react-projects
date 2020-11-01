import React from 'react'
import withData from '../../hoc/with-data';
import SwapiService from '../../services/swapi-services';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarShips);

export {
    PersonList, PlanetList, StarshipList
}