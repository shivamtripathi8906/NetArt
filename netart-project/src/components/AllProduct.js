import React from 'react';
import allproduct from "../assets/3.png";
import "../css/navbar.css";

function AllProduct() {
  return (
    <div>
      <div className='allProductMainCont'>
        <div className='allProductImage'>
          <img src={allproduct} alt="allproduct"></img>
        </div>
        <div className='productList'>
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
        <div className='redLine'>
        </div>
        <div className='allproductList'>
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>CHEMICALS & PROCESS | POWER WATER & WASTE | WATER OILS & GAS | PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
        </div>
      </div>
    </div>
  )
}

export default AllProduct