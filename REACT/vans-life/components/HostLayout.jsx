import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {

    return(
        <>
        <div className="host-nav">
            <NavLink to=".">Dashboard</NavLink>
            <NavLink to="income">Income</NavLink>
            <NavLink to="vans">Vans</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
           
        </div>
         <Outlet/>
        </>
    )
    
};
