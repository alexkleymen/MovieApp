import React, { Component,createContext,useState,useEffect } from 'react';
import axios from 'axios'
export const MovieContext = createContext()

const MoviesContextProvider = (props) => {
    const [movies,setMovies] = useState([])

    const addMovie = (movie) =>{
        setMovies([...movies,movie])
    }

    const updateMovie = (obj) =>{
        let temp = [...movies]
        temp = temp.filter(movie=>movie.id!=obj.id)
        temp.push(obj)
        setMovies(temp) 
    }

    const deleteMovie = (id) =>{
        setMovies(movies.filter(movie=>movie.id!=id))
    }


    useEffect(()=>{
        axios.get('https://api.tvmaze.com/shows').then(resp=>setMovies(resp.data))
    },[])
    return ( 
        <div>
            <MovieContext.Provider value={{movies,addMovie,updateMovie,deleteMovie}}>
                {props.children}
            </MovieContext.Provider>
        </div>
     );
}
 
export default MoviesContextProvider;