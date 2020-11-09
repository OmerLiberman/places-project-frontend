import React from 'react';

import './PlacesList.css';
import Card from '../../../shared/components/UIElements/Card/Card';
import PlaceItem from '../PlaceItem/PlaceItem';

const PlacesList = props => {
  if (props.items.length === 0) {
    return (
        <div className="place-list center">
          <Card>
            <h2> No place has found. </h2>
            <button> Share Place</button>
          </Card>
        </div>
    );
  }
  return (
      <ul>
        {props.items.map(place => (
            <PlaceItem key={place.id}
                       id={place.id}
                       image={place.imageUrl}
                       title={place.title}
                       description={place.description}
                       address={place.address}
                       creatorId={place.creator}
                       coordinates={place.location}/>
        ))}
      </ul>
  );
};

export default PlacesList;