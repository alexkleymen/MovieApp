import React, { Component,useContext,useState,useReducer,useEffect } from 'react';
import { useHistory,useLocation } from "react-router-dom";
import { MovieContext } from '../context/MoviesContext';
import { v1 as uuidv1 } from 'uuid'

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
 
export default Editmovie;