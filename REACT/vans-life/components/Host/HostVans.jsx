import React , { useState,useEffect }from "react";
import { Link, useLoaderData } from "react-router-dom";
import {getHostVans} from "../api";

export const hostVansLoader = async () => {
    return getHostVans()
}

export default function HostVans() {
const vans = useLoaderData()

const hostVanEl = vans.map( van =>(
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
    <div className="host-vans" >
     <img src={van.imageUrl} alt={van.name} />

    <h3>{van.name}</h3>:
    <p>{van.price}/day</p>
     </div>
     </Link>
))
    return(
        <>
        
            <h1 className="host-van-intro">Your listed vans :</h1>
            {hostVanEl}
        </>
    )
};
