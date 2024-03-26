import React from "react";
import leaveside from "../image/leaveside.svg";
import airbeanlogo from "../image/airbean-logo-lg.svg";
import '../style/landingStyle.css';

export default function Landing (){
    
    return(

        <div className="landing-container">
        <div className="landing-content">
            <img src={leaveside} alt="aside" />
            <div className="logo-text">
                <img src={airbeanlogo} alt="logo"/>
                <h1>AIR BEAN</h1>
                <h3>DRONEDELIVERED COFFEE</h3>
            </div>
        </div>
         </div>

    )
    
}