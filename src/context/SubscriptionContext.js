import React, { Component,createContext,useState,useEffect } from 'react';
import axios from 'axios'
import firebase from 'firebase'

export const SubscriptionContext = createContext()

const SubscriptionProvider = (props) => {
    const [subscriptions,setSubscriptions] = useState([])

    const addSub = (sub) =>{
    var memberRef = firebase.database().ref('Members')
    var key = memberRef.push()
    key.set({
        ...sub,id:key.toString().slice(45)
    })
    }

    const addMovieToSub = (movie,id) => {
        var memberRef = firebase.database().ref('Members/' + id)
        let temporary = []
        memberRef.once('value').then(function(data){
            if(data.val()?.movies){
                temporary = data.val().movies
                temporary.push(movie)
                let test = firebase.database().ref('Members/' + id + '/movies')
                test.set(temporary)
            }
            else{
                temporary.push(movie)
                let test = firebase.database().ref('Members/' + id + '/movies')
                test.set(temporary)
            } 
        })
    }

    const updateSub = (obj) =>{
        var memberRef = firebase.database().ref('Members/' + obj.id)
        memberRef.set({...obj})
    }

    const deleteSub = (id) =>{
        var memberRef = firebase.database().ref('Members/' + id)
        memberRef.remove()
        .then(function(){
            console.log('removed')
        })
        .catch(function(error){
            console.log('removed failed' + error.code)
        })
    }

    useEffect (()=>{
        t();
        async function t(){
        let temp = await axios.get('https://jsonplaceholder.typicode.com/users')
        temp=temp.data
        var memberRef = firebase.database().ref('Members')
        temp = temp.map(t=>{
            var key = memberRef.push();
            key.set({
                ...t,movies:{},id:key.toString().slice(45)
            })
            })

        memberRef.on('value',function(snapshot){
            let usersFromDb = snapshot.val()
            let temp = []
            //console.log(usersFromDb)
            for(let el in usersFromDb){
                temp.push({...usersFromDb[el]})
            }
            setSubscriptions(temp)
        },
        function(error){
            console.log(error.code)
        })
    }
    },[])



    return ( 
        <div>
            <SubscriptionContext.Provider value={{subscriptions,addSub,updateSub,deleteSub,addMovieToSub}}>
                {props.children}
            </SubscriptionContext.Provider>
        </div>
     );
}
 
export default SubscriptionProvider;
