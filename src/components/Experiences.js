import React from "react";
import star from "../images/star.png";
import ellipse from "../images/ellipse.png";
import "../styles/Experiences.css";

export default function Experiences(props){
    let badgeText;
    if (props.data.openSpots === 0) badgeText = "SOLD OUT" 
    else if(props.data.location === "ONLINE") badgeText = "ONLINE"

    return(
        <div className="exp bg-color common-padding-left">
            {badgeText !== undefined && <div className="badge">{badgeText}</div>}
            <img src={props.data.thumbnail} alt="Thumbnail"></img>
            <div className="review bg-color">
                <img src={star} alt="Star" className="star bg-color"></img>
                <p className="t-1 bg-color font-details">{props.data.rating}</p>
                <p className="t-2 bg-color font-details">{props.data.review}</p>
                <img src={ellipse} alt="Ellipse" className="ellipse bg-color"></img>
                <p className="t-3 bg-color font-details">{props.data.location}</p>
            </div>
            <p className="details bg-color font-details">
                {props.data.title}
            </p>
            <p className="price bg-color font-details font-weight-600">
                From ${props.data.price} <span className="bg-color font-details">/ person</span>
            </p>
        </div>
    )
}