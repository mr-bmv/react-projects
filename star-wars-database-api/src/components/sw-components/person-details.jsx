import React from 'react'
import withSwapiService from '../../hoc/with-swapi-service';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImg } = swapiService;
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

export default withSwapiService(PersonDetails);