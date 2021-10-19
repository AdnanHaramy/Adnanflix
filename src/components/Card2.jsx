import React, { useEffect } from 'react';
import './Card2.css'
import Burger4 from './images/Burger4.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Card2 () {
    return <div data-aos="zoom-in"  data-aos-duration="2000" className="parent">
        <div className="container">
       <div className="containerChild1">
           <h2 className="discover" >DISCOVER</h2>
           <h1 className="upcomingEvents">UPCOMING EVENTS</h1>
           <p className="dummyText">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore qui minima harum provident,
             at accusantium asperiores
              sit neque ullam ratione.
              Dolore qui minima harum provident.
              </p>
       </div>
       <div className="containerChild2">
           <img className='burger4Img' src={Burger4} alt="" />
       </div>
    </div>
    </div>;
    
}
export default Card2;