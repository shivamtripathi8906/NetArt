import React from 'react'
import award from "../assets/1.png";
import awardReceived from "../assets/2.png";
import "../css/banner.css"

function BannerContent() {
  return (
    <div>
      <div className='bannerMainContainer'>
        <div className='bannerChild1'>
          <img src={award} alt='award'></img>
        </div>
        <div className='bannerChild2'>
          <div className='pointerContent'>
            <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
            <ul className='unorderList'>  
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
          </div>
          <div className='awardReceivingPic'>
            <img src={awardReceived} alt='awardReceived'></img>
          </div>
          <div className='imageSubtext'>
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
      </div>
      <div className='subPara'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      </div>
    </div>
  )
}

export default BannerContent