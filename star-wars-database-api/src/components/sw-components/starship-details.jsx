import React from 'react'
import withSwapiService from '../../hoc/with-swapi-service';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';

const StarshipDetails = ({ itemId, swapiService }) => {
	const { getStarShip, getStarshipImg } = swapiService;
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

export default withSwapiService(StarshipDetails);