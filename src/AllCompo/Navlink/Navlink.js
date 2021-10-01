import React from 'react';
import { NavLink } from 'react-router-dom';
import './navlink.css';

const Navlink = () => {
    return (
      
            <div>
                   <NavLink to='/home' className='navStyle' >Home</NavLink>
            <NavLink to='/blog' className='navStyle'>Blog</NavLink>
            <NavLink to='/contact' className='navStyle'>Contact</NavLink>
            <NavLink to='/about' className='navStyle'>About</NavLink>
            

            </div>
         

           

        
    );
};

export default Navlink;