import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMeanu = () => {
    return (
        <div >
             <NavLink  to="/header" 
             activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Header</NavLink>
      <NavLink  to="/about" 
      activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>About</NavLink>
      <NavLink  to="/notfound" 
      activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Not Found</NavLink>
        </div>
    );
};

export default NavMeanu;