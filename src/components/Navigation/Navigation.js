import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        to={routes.HOMEPAGE}
        className="link"
        activeClassName="active-link"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.MOVIES}
        className="link"
        activeClassName="active-link"
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
