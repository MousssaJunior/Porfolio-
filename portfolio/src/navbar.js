import React from 'react';
import './Navbar.css';
import menu from './image/whitemenu.png';
import {menuburger} from './menu-burger.js'

const Navbar = () => {
 

  return (
    <nav className="navbar">
      <a href="#" className="logo"> Moussa</a>
      <div className="nav-links"> 
      <ul>
        <li className="active"><a href="#">A propos</a></li>
        <li><a href="#">Technologie</a></li>
        <li><a href="#">Réalisations</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </div>
     <img onClick ={menuburger}src={menu} alt='menu burger' className='menu-burger'/>
    </nav>
  );
};

export default Navbar;
