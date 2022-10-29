import React, {useState} from "react"
import Movie from "./Movie"

export default function FindFilm() { 
    
    const [movieData, setMovieData] = useState([])   
    const [movieName, setMovieName] = useState([])
    let movieElements = null
   
    
    function getMovieData(){
        fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=e17f4e22`)
            .then(response => response.json())
            .then(data => { 
                setMovieData(data.Search)
                setMovieName([])
            })   
    }
    
    
    function handleTextChange(event){
        setMovieName(event.target.value)
    }
    
    
    if(movieData.length > 0){
        movieElements = movieData.map( item => {
            return(
                <Movie
                  key= {item.imdbID}
                  id= {item.imdbID}
                  name= {item.Title}
                  posterImage={item.Poster}
                  year={item.Year}
                  type={item.Type}
                />
            )
        })
    }
           
    return (
        <div> 
            <div className="search">
                <input 
                     type="text"
                     className="search--movie" 
                     placeholder="Enter movie title"
                     name="movie"
                     value={movieName}
                     onChange={handleTextChange} 
                />
                <button className="search--btn" onClick={getMovieData}>Fetch Movie Info</button>
            </div>
            <div className="movie--wrapper">
                {movieData.length > 0 && movieElements}
            </div> 
        </div>
    )
}

