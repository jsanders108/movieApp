import React from "react"

export default function Movie(props){
   return (
            <div className="movie--container">
                <img className="movie--image" src={props.posterImage} alt="image not available"/>
                <div className="movie--subcontainer">
                    <h2 className="movie--title">{props.name}</h2>
                    <p className="movie--year">Year: {props.year}</p> 
                    <p className="movie--type">Type: {props.type}</p>
                </div>
            </div>   
    )
}
