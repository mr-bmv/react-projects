import React from 'react'
import withSwapiService from '../../hoc/with-swapi-service';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';

const PlanetDetails = ({ itemId, swapiService }) => {
	const { getPlanet, getPlanetImg } = swapiService;
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
export default withSwapiService(PlanetDetails);