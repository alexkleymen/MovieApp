import React, { Component,useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MoviesContext';
import Movie from './Movie'

const Allmovie = () => {
    const {movies} = useContext(MovieContext)
    const [dispay,setDisplay] = useState([])

    const search = (e) =>{
        setDisplay(movies.filter(movie=>movie.name.toLowerCase().includes(e.target.value.toLowerCase())))
        console.log(e.target.value)
    }

    useEffect(()=>{
        setDisplay(movies)
    },[])
    return ( 
        <div>
            <label>Find Movie: </label>
            <input onChange={search} type='text' placeholder='enter movie'></input>
            {dispay.map(movie=>{
                return(
                    <Movie data={movie}/>
                )
            })}
        </div>
     );
}
 
export default Allmovie;