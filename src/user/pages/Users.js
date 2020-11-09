import React from 'react';

import UsersList from '../components/UserList/UsersList';

const Users = () => {
  // DUMMY (should be fetched from the backend.
  const Users = [
    {
      id: 'u1',
      name: 'Donald',
      image: 'https://static01.nyt.com/images/2020/04/27/us/politics/00-trump-cand-page/00-trump-cand-page-mediumSquareAt3X.jpg',
      'places': 1
    },
    {
      id: 'u2',
      name: 'Joe',
      image: 'https://www.gannett-cdn.com/presto/2020/08/27/PMJS/ba6bede5-abb7-4142-adf5-e0b2db8a7a82-AP_Election_2020_DNC_Biden.jpg',
      'places': 5
    },
  ];

  return (
      <UsersList items={Users}/>
  );
};

export default Users;