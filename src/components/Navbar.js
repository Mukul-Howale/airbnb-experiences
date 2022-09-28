import React from "react";
import airbnb_logo from "../images/airbnb_logo.png";
import "../styles/Navbar.css";

export default function Navbar(){
    return (
        <div className="navbar bg-color">
            <img src={airbnb_logo} alt="Airbnb Logo" className="bg-color"></img>
        </div>
    );
}