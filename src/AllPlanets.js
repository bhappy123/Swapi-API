// eslint-disable-next-line

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllPlanets = ()=>{
const [planet, setPlanet] = useState([]);
let [pageCount, setPageCount] = useState(1);
let i;
if(pageCount === 1){
  i=0;
}
else{
  i = (pageCount-1) * 10;
}


let url = `https://swapi.dev/api/planets/?page=${pageCount}`;

const decreasePageCount = (e)=>{
  if(pageCount <= 1){
    e.preventDefault();
  }
  else{
    setPageCount(pageCount-1);
  }

}
const increasePageCount = (e)=>{
  if(pageCount >= 6){
    e.preventDefault();
  }
  else{
    setPageCount(pageCount+1);
  }
}


useEffect( ()=>{
  axios(url)
  .then(res=> setPlanet(res.data.results))
  .catch(err => console.log(err))
}, [])
console.log(planet);
  return(
    <div className="container">
      <div className="row">
      {planet.map(planetName => (
          <div className="col-md-4 p-3 mb-5 justify-content-space-around"  key={planetName.url}>
            <div className="bg-success py-3 px-1">
              <h3>Planet Name: <span className="text-white">{planetName.name}</span></h3>
              <p className=" p-2 text-white">Planet Rotation Period: {planetName.rotation_period}</p>
      <Link to={`/Each/${++i}`}><button type="button" className="btn btn-outline-light">View Details {i}</button></Link>
            </div>
          </div>
      ))}
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
        <p>Page No: {pageCount}</p>
          <button onClick={decreasePageCount} className="btn btn-primary">Prev</button>
          <button onClick={increasePageCount} className="ml-4 btn btn-outline-primary">Next</button>
        </div>
      </div>
    </div>
  )
}


export default AllPlanets;
