import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <ul>
    <li>
      <NavLink to={routes.HOMEPAGE} activeClassName="active-link">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.MOVIES} activeClassName="active-link">
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
