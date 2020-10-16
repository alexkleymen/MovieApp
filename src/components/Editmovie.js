import React, { Component,useContext,useState,useReducer,useEffect } from 'react';
import { useHistory,useLocation } from "react-router-dom";
import { MovieContext } from '../context/MoviesContext';
import { v1 as uuidv1 } from 'uuid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const initialState = {
    name: '',
    Imgurl: '',
    premiered: '',
    id: '',
}
function reducer(state,action){

    switch(action.type){
        case 'end':
            return {...state,...initialState}
        
        case 'init':
            return{...state,...action.value}
        
        default: return{...state, [action.name] : action.value}
    }
}

const Editmovie = (props) => {
    const [movie, dispatch] = useReducer(reducer,initialState);
    const history = useHistory();
    const location = useLocation();
    const {movies,addMovie,updateMovie,deleteMovie} = useContext(MovieContext);
    const [gener,setGenger] = useState([])

   
    const handleSubmit = (e) => {
        let temp = {...movie}
        dispatch({type: 'end'})
        e.preventDefault();
        updateMovie({...temp,genres:gener})
        setGenger([])
    }

    const addGener = (e) => {
        let temp = e.target.value.split(',')
        setGenger(temp)
    }

    useEffect(()=>{
        let obj = {}
        obj.name = location.state.data.name;
        obj.Imgurl = location.state.data.image.medium;
        obj.premiered = location.state.data.premiered;
        obj.id = location.state.data.id;
        
        setGenger(location.state.data.genres)
        dispatch({type:'init', value: obj})
        
    },[])


    return ( <div>
        <form onSubmit={handleSubmit}>

        <TextField  required onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})}  value={movie.name}  name='name' label="Name"/><br/>

        <TextField  required onChange={addGener}  value={gener.map(g=>g)}  name='Genres' label="Genres"/><br/>


        <TextField  required onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})}  value={movie.Imgurl} type='url'  name='Imgurl' label="Img url"/><br/>
            
        <TextField  required onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} value={movie.premiered} type='date'  name='premiered' label="Premired"/><br/>

            
            <Button type='submit' variant="contained">Save</Button>
            <Button onClick={()=>history.goBack()} variant="contained">Cancel</Button>

        </form>
    </div> );
}
 
export default Editmovie;