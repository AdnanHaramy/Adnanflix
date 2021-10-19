import React, { Component } from 'react';
import './Footer.css'
import BurgerHouse from './images/BurgerHouse.png'
function Footer (){
    return <div className="footerDiv" >
        <img className="burgerHouse" src={BurgerHouse} alt="" />
    </div>;
}
export default Footer;