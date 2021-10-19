import React from 'react';
import './Header.css'
import img from './images/img.jpg'
function Header () {
    return <div className="headerImg">
        <img className="imgHeader" src={img} alt="" />
    </div>;
}
export default Header;