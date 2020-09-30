import React, { Component,useContext,useState,useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { MovieContext } from '../context/MoviesContext';
import { v1 as uuidv1 } from 'uuid'

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

const Addmovie = (props) => {
    const [movie, dispatch] = useReducer(reducer,initialState);
    const history = useHistory();
    const {movies,addMovie,updateMovie,deleteMovie} = useContext(MovieContext);
    const [gener,setGenger] = useState([])

   
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
            <label>Name</label>
            <input value={movie.name} onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} name='name' type='text'></input>

            <label>Genres</label>
            <input value={gener.map(g=>g)} onChange={addGener} type='text' name='Genres'></input>

            <label>Img url</label>
            <input value={movie.Imgurl} onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} type='url' name='Imgurl'></input>

            <label>Premired</label>
            <input  value={movie.premiered} onChange={(e)=>dispatch({value:e.target.value, name: e.target.name})} type='date' name='premiered'></input>

            <button type='submit'>Save</button>
            <button onClick={()=>history.goBack()}>Cancel</button>
        </form>
    </div> );
}
 
export default Addmovie;