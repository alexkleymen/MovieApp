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
{/*         <h5>{data.name} , {data.premiered?data.premiered.slice(0,4):'Error'}</h5>
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

        <span style={{display:'block'}}>
        {sub.map(el=>{
            return(
                <li key={uuidv4()}> <Link
                to={{
                    pathname: `/Movies/${el.id}`
                }}
                >{el.name}</Link> , {el.date}</li>
            )
        })}
        </span> */}



       <Card data={data}/>

    </div> );
}
 
export default Movie;