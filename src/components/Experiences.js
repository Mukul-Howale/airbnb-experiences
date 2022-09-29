import React from "react";
import swimmer from "../images/swimmer.png";
import star from "../images/star.png";
import ellipse from "../images/ellipse.png";
import "../styles/Experiences.css";

export default function Experiences(){
    return(
        <div className="exp bg-color common-padding-left">
            <img src={swimmer} alt="Swimmer"></img>
            <div className="review bg-color">
                <img src={star} alt="Star" className="star bg-color"></img>
                <p className="t-1 bg-color font-details">5.0</p>
                <p className="t-2 bg-color font-details">(6)</p>
                <img src={ellipse} alt="Ellipse" className="ellipse bg-color"></img>
                <p className="t-3 bg-color font-details">USA</p>
            </div>
            <p className="details bg-color font-details">
                Life lessons with Katie Zaferes
            </p>
            <p className="price bg-color font-details font-weight-600">
                From $136 <span className="bg-color font-details">/ person</span>
            </p>
        </div>
    )
}