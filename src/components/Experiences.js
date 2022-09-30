import React from "react";
import star from "../images/star.png";
import ellipse from "../images/ellipse.png";
import "../styles/Experiences.css";

export default function Experiences(props){
    let badgeText;
    if (props.openSpots === 0) badgeText = "SOLD OUT" 
    else if(props.location === "ONLINE") badgeText = "ONLINE"

    return(
        <div className="exp bg-color common-padding-left">
            {badgeText !== undefined && <div className="badge">{badgeText}</div>}
            <img src={props.thumbnail} alt="Thumbnail"></img>
            <div className="review bg-color">
                <img src={star} alt="Star" className="star bg-color"></img>
                <p className="t-1 bg-color font-details">{props.rating}</p>
                <p className="t-2 bg-color font-details">{props.review}</p>
                <img src={ellipse} alt="Ellipse" className="ellipse bg-color"></img>
                <p className="t-3 bg-color font-details">{props.location}</p>
            </div>
            <p className="details bg-color font-details">
                {props.title}
            </p>
            <p className="price bg-color font-details font-weight-600">
                From ${props.price} <span className="bg-color font-details">/ person</span>
            </p>
        </div>
    )
}