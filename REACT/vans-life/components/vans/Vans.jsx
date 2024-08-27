import React from "react";
import { useLoaderData,useSearchParams ,Link} from "react-router-dom";
import getVans from "../api";

export const vansLoader = async () => {
    return getVans();
};

export default function Vans() {
  const vans = useLoaderData();
  const [searchParams,setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  const displayedVans = typeFilter ? vans.filter(van=>van.type === typeFilter) : vans

    
    const vanElements = displayedVans.map( van =>(
      <div key={van.id} className="van-tile" >
        <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} />
        <h3>{van.name}</h3>
        <p>{van.price}<span>/day</span></p>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ))

    return (
      <div>
      <h1 className="vans-intro">Explore our van options</h1>
      <div className="van-list-filter">
              <Link className="van-type simple" to="?type=simple">Simple</Link>
              <Link className="van-type rugged" to="?type=rugged">Rugged</Link>
              <Link className="van-type luxury" to="?type=luxury">Luxury</Link>
              <Link className="van-type clear" to=".">Clear filters</Link>
            </div>
        <div className="vans-container">
            
            {vanElements}
        </div>
        </div>
    );
}