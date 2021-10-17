import React from 'react';
import Button1 from './Button1';
import './Card.css'
import hamburger from './images/Burger.png'
import hamburger2 from './images/Burger2.png'
import hamburger3 from './images/Burger3.png'
function Card (){
    return  <div className="parent">
        <div className="cardContainer">
        <div className="cardChild">
            <div className="cardChildTwo">
                <img className="cardChildImage" src={hamburger} alt="" />
            </div>
            <h1 className="cardHeading">Lorem Ipsum</h1>
            <p className="cardParagraph" >Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <Button1/>
        </div>
        <div className="cardChild">
            <div className="cardChildTwo">
            <img className="cardChildImage" src={hamburger2} alt="" />
            </div>
            <h1 className="cardHeading">Lorem Ipsum</h1>
            <p className="cardParagraph">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <Button1/>
        </div>
        <div className="cardChild">
            <div className="cardChildTwo">
            <img className="cardChildImage" src={hamburger3} alt="" />
            </div>
            <h1 className="cardHeading">Lorem Ipsum</h1>
            <p className="cardParagraph">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <Button1/>
        </div>
        </div>
    </div>;
    
}
export default Card;
 