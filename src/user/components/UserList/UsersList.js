import React from 'react';

import './UsersList.css';
import UserItem from '../UserItem/UserItem';
import Card from '../../../shared/components/UIElements/Card/Card';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
        <Card>
          <h2> No users found. </h2>
        </Card>
    );
  } else {
    return (
        <ul className="users-list">
          {props.items.map(user => (
              <UserItem
                  key={user.id}
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  placesCount={user.places}
              />
          ))}
        </ul>
    );
  }
};

export default UsersList;