import React from 'react';
import Register from './Register';
import Menu from './Menu';


const NavBar = () =>{
  return(
    <div className="nav__container">
      <Register />
      <Menu />
    </div>
  )
};

export default NavBar;