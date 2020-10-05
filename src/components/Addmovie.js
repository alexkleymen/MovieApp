import React, { Component,useContext,useState,useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { MovieContext } from '../context/MoviesContext';
import { v1 as uuidv1 } from 'uuid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
const initialState = {
    name: '',
    Imgurl: '',
    premiered: '',
}

function reducer(state,action){
    if(action.type=='end'){
        return {...state,...initialState}
    }
    else {
        return{...state, [action.name] : action.value}
    }
}

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const Addmovie = (props) => {
    const [movie, dispatch] = useReducer(reducer,initialState);
    const history = useHistory();
    const {movies,addMovie,updateMovie,deleteMovie} = useContext(MovieContext);
    const [gener,setGenger] = useState([])
    const classes = useStyles()
   
    const handleSubmit = (e) => {
        let temp = {...movie}
        dispatch({type: 'end'})
        e.preventDefault();
        addMovie({...temp,id:uuidv1(),genres:gener})
        setGenger([])
    }

    const addGener = (e) => {
        let temp = e.target.value.split(',')
        setGenger(temp)
    }


    return ( <div>
        <form onSubmit={handleSubmit}>
            

            <TextField value={movie.name} onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} name='name' label="Name" /><br/>

            

            <TextField value={gener.map(g=>g)} onChange={addGener}  name='Genres' label="Seprate gener by cooma" /><br/>

            

            <TextField value={movie.Imgurl} onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} label='Imgurl' name='Imgurl' /><br/>


            <TextField value={movie.premiered}  InputLabelProps={{
          shrink: true,
        }} className={classes.textField} onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} type="date" label='Premired' name='premiered' /><br/><br/>


            <Button type='submit' variant="contained">Save</Button><br/><br/>

            <Button onClick={()=>history.goBack()}  variant="contained">Cancel</Button>

            
            
        </form>
    </div> );
}
 
export default Addmovie;