import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function EachPlanet({match}) {

    const [eachPlanet, setEachPlanet] = useState([]);
    let [planetId, setPlanetId] = useState(match.params.id);
    let url = `https://swapi.dev/api/planets/${planetId}`;

    const nextPlanet = (e)=>{
        e.preventDefault();
        console.log(planetId);
        setPlanetId(++planetId)
    }

    useEffect(() => {
        axios(url)
        .then(res => setEachPlanet(res.data))
        .catch(err => console.log(err))
    })

    
    return (
        <div className="container p-5">
            <div className="card">
                <h1>Name: <span className="text-success">{eachPlanet.name}</span></h1>
                <h4>Rotation Period: <span className="text-danger">{eachPlanet.rotation_period}</span></h4>
                <h4>Diameter: <span className="text-danger">{eachPlanet.diameter}</span></h4>
                <h4>Climate: <span className="text-danger">{eachPlanet.climate}</span></h4>
                <h4>Gravity: <span className="text-danger">{eachPlanet.gravity}</span></h4>
                <h6>Terrain: <span className="text-danger">{eachPlanet.terrain}</span></h6>
                <button className="btn btn-block btn-outline-success" onClick={nextPlanet}>Next</button>
            </div>
        </div>
    )
}

export default EachPlanet
