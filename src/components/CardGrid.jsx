import React, { Component } from 'react';
import Burger3 from './images/Burger3.png'
import Burger2 from './images/Burger2.png'
import Burger from './images/Burger.png'


import './CardGrid.css'
function CardGrid (){
    return <React.Fragment>
    <div className="parentOfParents">
    <div className="parentCardPicture" >
    <div className="childCardPicture">
        <img className="childCardPictureImg" src={Burger3} alt="" />
    </div>
    <h1>Cheese Burger</h1>
    <div className="parent1">
    <button className="OrderNow" >Order Now</button>
    </div>
    </div>
    <div className="parentCardPicture" >
    <div className="childCardPicture">
        <img className="childCardPictureImg" src={Burger2} alt="" />
    </div>
    <h1>Cheese Burger</h1>
    <div className="parent1">
    <button className="OrderNow" >Order Now</button>
    </div>
    </div>
    
    <div className="parentCardPicture" >
    <div className="childCardPicture">
        <img className="childCardPictureImg" src={Burger} alt="" />
    </div>
    <h1>African Burger</h1>
    <div className="parent1">
    <button className="OrderNow" >Order Now</button>
    </div>
    </div>
    </div>
   
    </React.Fragment>
}
export default CardGrid;