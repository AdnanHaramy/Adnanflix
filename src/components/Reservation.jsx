import './Reservation.css'
import React, { Component } from 'react';
function Reservation () {
return <React.Fragment>
   <h3>Reservation</h3>
   <h2>BOOK YOUR TABLE</h2>
   <div className="parent">
   <div className="formContainer">
     <div className="form">
         <input type="text" name="" value='' className="formHolder" placeholder="Name" />
     </div>
     <div className="form">
         <input type="text" name="" value='' className="formHolder" placeholder="Date" />
     </div> 
     <div className="form">
         <input type="text" name="" value='' className="formHolder" placeholder="Email" />
     </div> 
     <div className="form">
         <input type="text" name="" value='' className="formHolder" placeholder="Phone" />
     </div> 
     <div className="form">
         <input type="text" name="" value='' className="formHolder" placeholder="Time" />
     </div> 
   </div>
   </div>
   
</React.Fragment>;
}
export default Reservation;