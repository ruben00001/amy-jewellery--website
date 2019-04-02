import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
  <div className="header">
     {/* <li><NavLink className="nav-menu__link" to="/indoor">Indoor Plants</NavLink></li> */}
    <div className="header-link header-link--home"><NavLink to="/">amy rodriguez</NavLink><span className='header-link-decoration header-link-decoration--home'>.</span></div>
    <div className="header-link header-link--contact"><span className='header-link-decoration header-link-decoration--contact'>.</span><NavLink to="/contact">contact</NavLink></div>
  </div>
);

export default Navbar;