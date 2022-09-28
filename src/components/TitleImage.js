import React from "react";
import group from "../images/group_image.png";
import "../styles/TitleImage.css";

export default function TitleImage(){
    return(
        <div className="title-image bg-color">
            <img src={group} alt="Group" className="bg-color"></img>
        </div>
    )
}