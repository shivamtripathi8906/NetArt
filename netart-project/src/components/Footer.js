import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import "../css/footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='footerMainContainer'>
        <div className='footerContent'>
        <div className='logo'>
          <FaPhone/>
        </div>
        <div className='content'>
          <p>Toll free 1800 200 1234</p>
        </div>
        </div>

        <div className='footerContent'>
        <div className='logo'>
          <FaFacebook/>
        </div>
        <div className='content'>
          <p>www.facebook.com/cripumps</p>
        </div>
        </div>

        <div className='footerContent'>
        <div className='logo'>
          <BsBrowserEdge />
        </div>
        <div className='content'>
          <p>www.crigroups.com</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer