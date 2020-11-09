import React from 'react';
import {useParams} from 'react-router-dom';

import PlacesList from '../components/PlacesList/PlacesList';

/////////////
const PLACES = [
  {
    id: 'p1',
    title: 'title',
    imageUrl: 'https://www.touristisrael.com/wp-content/uploads/210910570-4.jpg',
    description: 'desc',
    address: 'address1',
    location: {
      lat: 99,
      lng: 55
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'title2',
    imageUrl: 'https://www.touristisrael.com/wp-content/uploads/210910570-4.jpg',
    description: 'desc',
    address: 'address2',
    location: {
      lat: 99,
      lng: 55
    },
    creator: 'u2',
  }
]
//////////////////


const UserPlaces = () => {
  const uid = useParams().uid;
  const places = PLACES.filter(place => place.creator === uid);

  return (
      <PlacesList items={places}/>
  )
}

export default UserPlaces;