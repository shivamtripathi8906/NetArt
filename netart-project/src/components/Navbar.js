import React from 'react';
import "../css/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className='navbarMainContainer'>
        <div className='navbarContentContainer'>
          <div className='navbarLogoContainer'>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar