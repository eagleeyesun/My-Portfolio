import React from "react";

export default function Hero(props) {
    return(
        <div className={`box1 ${props.darkMode ? "dark" : ""}`}>
            <img className="image-cards" src={props.item.imageUrl} alt={props.item.title}/>
          <div className="box2">  
            <h5><img src="/location.svg"className="location-tag"alt="location-sign"/>{props.item.location}<a href={props.item.googleMapsUrl}>View on Google Maps</a></h5>
            <h2>{props.item.title}</h2>
            <span className="from-date">{props.item.startDate} - {props.item.endDate}</span>
            <p>{props.item.description}</p>
            </div>
           




        </div>
    )
}