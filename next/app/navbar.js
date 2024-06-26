import React from 'react';
import './Navbar.css';
// import menu from './image/whitemenu.png';
import {menuburger} from './menu-burger.js'

const Navbar = () => {
 

  return (
    <nav className="navbar">
      <a href="#" className="logo"> Moussa</a>
      <div className="nav-links"> 
      <ul>
        <li className="active"><a href='#propos'>A propos</a></li>
        <li><a href="#all-tecno">Technologie</a></li>
        <li><a href="#realisation">Réalisations</a></li>
        <li><a href="#formulaire">Contact</a></li>
      </ul>
      </div>
     <img onClick ={menuburger}src='./image/whitemenu.png' alt='menu burger' className='menu-burger'/>
    </nav>
  );
};

export default Navbar;
