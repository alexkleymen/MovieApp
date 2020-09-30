import React, { Component,useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';
import Movie from './Movie'

const Allmovie = () => {
    const {movies} = useContext(MovieContext)
    return ( 
        <div>
            {movies.map(movie=>{
                return(
                    <Movie data={movie}/>
                )
            })}
        </div>
     );
}
 
export default Allmovie;