import React from "react";
import { useEffect, useState } from "react";
import { useParams, useLocation , Link ,useLoaderData } from "react-router-dom";
import getVans from "../api";

export function loader({params}) {
    return getVans(params.id)
}

export default function VanDetails() {
    const location = useLocation()
    const van = useLoaderData()
    const params = useParams()

    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    
    
   


    return (
        <div className="van-detail-container">
          <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            <div className="van-detail">
                <img className="van-detail-image"src={van.imageUrl} alt={van.name} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <h3>{van.price}<span>/day</span></h3>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>

          
        </div>
    )
    
};
