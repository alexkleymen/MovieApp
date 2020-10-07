import React, { Component,useContext,useEffect,useState } from 'react';
import { MovieContext } from '../context/MoviesContext';
import {Link} from 'react-router-dom'
import Card from './Card'
import { SubscriptionContext } from '../context/SubscriptionContext';
import { v4 as uuidv4 } from 'uuid';

const Movie = ({data}) => {
    const {movies,addMovie,updateMovie,deleteMovie} = useContext(MovieContext);
    const {subscriptions,addSub,updateSub,deleteSub,addMovieToSub} = useContext(SubscriptionContext);
    const [sub,setSub] = useState([])
    

    useEffect(()=>{
        subscriptions.forEach(el=>{
            el.movies.forEach(s=>{
                if(s.movie==data.name){
                    setSub([...sub,{id: el.id ,name: el.name,date: s.date}])
                }
            })
        })
    },[subscriptions])
    return ( <div>
  
       <Card data={[data, sub]}/>

    </div> );
}
 
export default Movie;