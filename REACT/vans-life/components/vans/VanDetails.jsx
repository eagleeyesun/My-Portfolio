import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetails() {
    const [van,setVan] = useState(null)
    const params = useParams()
    
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVan(data.vans))
    },[params.id])


    return (
        <div className="van-detail-container">
           { van ? (
            <div className="van-datail">
                <img className="van-detail-image"src={van.imageUrl} alt={van.name} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <h3>{van.price}<span>/day</span></h3>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>

           ) : <h2>...Loading</h2> } 
        </div>
    )
    
};
