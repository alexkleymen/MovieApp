import React, { Component,useContext,useEffect,useState } from 'react';
import { MovieContext } from '../context/MoviesContext';
import { SubscriptionContext } from '../context/SubscriptionContext';
import Movies from './Movies';
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom'

const Member   = ({data}) => {

const [hidden,setHidden] = useState(true)
const [newSub,setNewSub] = useState('')
const [date,setDate] = useState('')
const {movies} = useContext(MovieContext);
const {subscriptions,addSub,updateSub,deleteSub,addMovieToSub} = useContext(SubscriptionContext)
const style = hidden ? 'none' : ''; 

const addNewMovie = () => {
    let obj = {};
    obj.movie = newSub;
    obj.date = date;
    addMovieToSub(obj,data.id)
}






    
    return ( 
        
        <div>
            <h4>{data.name}</h4>
            Email: {data.email} <br/>
            City : {data.address.city} <br/>
            <button>
                <Link to={{
                    pathname: '/Subscriptions/editmember',
                    state: data,
                }}>Edit</Link>
            </button>
            <button onClick={()=>deleteSub(data.id)}>Delete</button>
            <h5>Movies Watched</h5>
            <button onClick={()=>setHidden(!hidden)}>Subscribe to a new movie</button>
            <div style={{display : style}}>
                <label>Movie Name</label>
                <select onChange={(e)=>setNewSub(e.target.value)}>
                <option value="" selected disabled hidden>Choose here</option>
                    {movies.map(movie=>{
                        return(
                            <option key={movie.id} value={movie.name}>{movie.name}</option>
                        )
                        
                    })}
                </select>
                <input onChange={(e)=>setDate(e.target.value)} type='date' placeholder='enter a date to watch'></input>

                <button onClick={addNewMovie}>Subscribe</button>

            </div>
            <ul>
                
                {
                data.movies.length ?
                data.movies.map(movie=>{
                    return(
                    <li key={uuidv4()}>{movie.movie}, {movie.date}</li>
                    )
                }):
                <h5>No Movies Seen Yet</h5>}
            </ul>
        </div>
     );
}
 
export default Member;