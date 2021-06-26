import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => {
  return (
        <nav>
          <NavLink
            exact
            className='NavLink'
            activeClassName='NavLink-activ'
            to={routes.home}
          >
            Homme
          </NavLink>
           <NavLink
            exact
            className='NavLink'
            activeClassName='NavLink-activ'
            to={routes.moviesPage}
          >
            Movies
          </NavLink>
        </nav>
     
  );
};
export default Navigation;