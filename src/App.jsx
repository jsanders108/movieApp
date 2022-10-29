
import React from "react"

//import reactLogo from './assets/react.svg'
import Header from "./components/Header"
import Movie from "./components/Movie"
import FindFilm from "./components/FindFilm"
import Footer from "./components/Footer"

export default function App() { 
       
    return (
        <div>
            <Header />
            <FindFilm />  
            <Footer />  
        </div>
    )
}

