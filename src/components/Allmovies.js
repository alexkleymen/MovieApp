import React, { Component,useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MoviesContext';
import Movie from './Movie'
import TextField from '@material-ui/core/TextField';
import Card from './Card'
import Grid from '@material-ui/core/Grid';

const Allmovie = () => {
    const {movies} = useContext(MovieContext)
    const [dispay,setDisplay] = useState([])
    const [help,setHelp] = useState(false)

    const search = (e) =>{
        setDisplay(movies.filter(movie=>movie.name.toLowerCase().includes(e.target.value.toLowerCase())))
        console.log(e.target.value)
    }

    useEffect(()=>{
        setDisplay(movies)
    },[movies])
    return ( 

        <div style={{'margin-top' : '20px'}}>
            <TextField
            onChange={search}
            label="Find Movie"
            margin="normal"
            variant="outlined"/>
            
            <Grid container  justify="space-around">
            {
            
            dispay.map(movie=>{
                return(
                    <Card data={movie}/>
                )
            })}
            </Grid>
        </div>
     );
}
 
export default Allmovie;