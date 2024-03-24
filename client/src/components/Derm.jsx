import React from 'react';
import "../styles/Derm.css";
const Derm = () => {
  return (
    <div className="derm-parent">
      <div className="derm-left">
        Recommending the Nearby Dermatologist
        <img src="src/assets/Map.png" alt="Maps" sizes="" srcset="" />
      </div>
      <div className="derm-right">
        <ul>
          <li>Clinic Name:</li>          
          <li className='mapdb'>____________</li>          
          <li>Contact Details: </li>          
          <li className='mapdb'>____________</li>          
          <li>Distance From Here:</li>          
          <li className='mapdb'>____ KM</li>          
          <li>Timings:</li>          
          <li className='mapdb'>____________</li>          
        </ul>
      </div>
    </div>
  );
};

export default Derm;