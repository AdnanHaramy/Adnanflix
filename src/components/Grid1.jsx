import React, { useEffect } from 'react';
import './Grid1.css'
import BurgerImage from './images/BurgerImage.png'
import hamburger from './images/hamburger.png'
import hamburger2 from './images/hamburger2.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Grid1 () {
    useEffect(() => {
        Aos.init({duration : 800});
    }, []);
        return <div className="parent">
  <div className="gridContainer">
           <div data-aos="fade-up-right" className="grid1">
               <img className="img1" src={BurgerImage} alt="" />
           </div>
           <div data-aos="fade-up-left" className="grid2">
               <div className="gridTwoChild">
                   <img className="img2" src={hamburger} alt="" />
               </div>
               <div className="gridTwoChild">
                   <img className="img2" src={hamburger2} alt="" />
               </div>
           </div>
        </div>
        </div>;
    
}
export default Grid1; 