import React, { Component,useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';
import {Link} from 'react-router-dom'

const Movie = ({data}) => {
    const {movies,addMovie,updateMovie,deleteMovie} = useContext(MovieContext);
    return ( <div>
        <h5>{data.name} , {data.premiered.slice(0,4)}</h5>
        <span style={{display:'block'}}>genres: {data.genres.map(g=>`${g}, `)}</span>
        <img class="fit-picture"
        src={data?.image?.medium?data.image.medium:data.Imgurl}
        alt='no picture here'></img>
        <span style={{display:'block'}}>
        <button>
            <Link to={{
                pathname: '/Movies/editmovie',
                state: {data}
            }}>Edit</Link>
        </button>
        <button onClick={()=>deleteMovie(data.id)}>Delete</button>
        </span>

    </div> );
}
 
export default Movie;