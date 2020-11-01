import React from 'react'
import withData from '../../hoc/with-data';
import SwapiService from '../../services/swapi-services';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

const withChildFunction = (Wrapper, fn) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => <span>{name} ({model})</span>;

const PersonList = withData(withChildFunction(
    ItemList,
    renderName
), getAllPeople);

const PlanetList = withData(withChildFunction(
    ItemList,
    renderName
), getAllPlanets);

const StarshipList = withData(withChildFunction(
    ItemList,
    renderNameAndModel
), getAllStarShips);

export {
    PersonList, PlanetList, StarshipList
};