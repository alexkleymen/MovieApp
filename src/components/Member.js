import React, { Component,useContext,useEffect,useState } from 'react';
import { MovieContext } from '../context/MoviesContext';
import { SubscriptionContext } from '../context/SubscriptionContext';
import Movies from './Movies';
import { v4 as uuidv4 } from 'uuid';
import {Link,useParams} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
      maxheight: 800,
      marginBottom: '4px'
    },
    media: {
      height: 450,
      width: 345,
      objectFit: "cover",
      
    },
    link : {
      textDecoration: 'none',
      color : 'inherit'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  }));

const Member   = ({data}) => {

const [hidden,setHidden] = useState(true)
const [newSub,setNewSub] = useState('')
const [date,setDate] = useState('')
const {movies} = useContext(MovieContext);
const {subscriptions,addSub,updateSub,deleteSub,addMovieToSub} = useContext(SubscriptionContext)
const style = hidden ? 'none' : ''; 
const classes = useStyles()

const addNewMovie = () => {
    let obj = {};
    obj.movie = newSub;
    obj.date = date;
    addMovieToSub(obj,data.id)
}






    
    return ( 
        
        <Grid item xs={3}>
            <Paper style={{padding: '4px'}}>
                <h4>{data.name}</h4>
                Email: {data.email} <br/>
                City : {data.address.city} <br/>


                <Button  size="small" color="primary">
                    <Link className={classes.link} to={{
                            pathname: '/Subscriptions/editmember',
                            state: data,
                        }}>Edit
                    </Link>
                </Button>

                <Button onClick={()=>deleteSub(data.id)} size="small" color="primary">Delete</Button>

                

                <Button onClick={()=>setHidden(!hidden)} variant="contained" color="primary">Subscribe to a new movie</Button>
                <h3>Movies Watched</h3>
                <div style={{display : style}}>


                <InputLabel id="movieselection">Movie</InputLabel>
                <Select
                style={{minWidth:'209px'}}
                labelId="movieselection"
                value={newSub}
                onChange={(e)=>setNewSub(e.target.value)}>
                    {movies.map(movie=>{
                    return(
                        <MenuItem key={movie.id} value={movie.name}>{movie.name}</MenuItem>
                    )
                    })}
                </Select>
                    <br/>

                    <TextField
                    id="date"
                    label="Date To Watch"
                    type="date"
                    onChange={(e)=>setDate(e.target.value)} 
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /><br/>
                
                

                <Button onClick={addNewMovie} size="small" color="primary">Subscribe</Button>
                   

                </div>
                <ul style={{listStyleType: "none"}}>
                    
                    {
                    data.movies.length ?
                    data.movies.map(movie=>{
                        return(
                        <li key={uuidv4()}>{movie.movie}, {movie.date}</li>
                        )
                    }):''
                    }
                </ul>
            </Paper>
        </Grid>
     );
}
 
export default Member;