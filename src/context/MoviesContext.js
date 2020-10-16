import React, { Component,createContext,useState,useEffect } from 'react';
import axios from 'axios'
import firebase from 'firebase'
import { ContactsOutlined } from '@material-ui/icons';
export const MovieContext = createContext()


const MoviesContextProvider = (props) => {
    const [movies,setMovies] = useState([])
    const [trigger,setTrigger] = useState(false)

    const addMovie = (movie) =>{
        let movieRef = firebase.database().ref('movies');
        let key = movieRef.push()
        movieRef.push({...movie,id:key.toString().slice(44)})
    }

    const updateMovie = (obj) =>{
        let movieRef = firebase.database().ref('movies/' + obj.id);
        movieRef.set({
            ...obj
        })
    }

    const deleteMovie = (id) =>{
        let movieRef = firebase.database().ref('movies/' + id);
        movieRef.once('value',function(snapshot){
            console.log(snapshot.val())
        })
        movieRef.remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            });
    }


    useEffect(()=>{
        axios.get('https://api.tvmaze.com/shows').then(resp=>{
            let temp = resp.data;
            let movieRef=firebase.database().ref('movies');
            temp.forEach(el=>{
                let key = movieRef.push()
                key.set({
                    ...el,id:key.toString().slice(44)
                })
            })
            movieRef.on('value',function(snapshot){
                let movieDataFromFireBase = snapshot.val()
                let temp = []
                for(let index in movieDataFromFireBase){
                    temp.push(movieDataFromFireBase[index])
                }
                setMovies(temp)
                setTrigger(true)
            })
        })
        
    },[])
     return ( 
        <div>
            <MovieContext.Provider value={{movies,addMovie,updateMovie,deleteMovie,trigger}}>
                {props.children}
            </MovieContext.Provider>
        </div>
     );
}
 
export default MoviesContextProvider;