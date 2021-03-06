import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import MainNavigation
  from './shared/components/Navigation/MainNavigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace/NewPlace';

const App = () => {
  return (
      <Router>
        <MainNavigation/>
        <main>
          <Switch>
            <Route path="/" exact> <Users/> </Route>
            <Route path="/:uid/places" exact> <UserPlaces/> </Route>
            <Route path="/places/new" exact> <NewPlace/> </Route>
            <Route path="/" exact> Some link </Route>
            <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
  );
};

export default App;
