import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
      <ul className="nav-links">
        <li><NavLink to="/" exact> Users </NavLink></li>
        <li><NavLink to="/"> Places </NavLink></li>
        <li><NavLink to="/"> Add Place </NavLink></li>
        <li><NavLink to="/"> Authenticate </NavLink></li>
      </ul>
  );
};

export default NavLinks;