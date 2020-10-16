import React, { Component,createContext,useState,useEffect } from 'react';
import firebase from '../utils/firebase'
export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [users,setUsers] = useState([])
    const [current,setCurrent] = useState('')
    

    const addUser = (user) =>{
        const userRef = firebase.database().ref('/Users');
        userRef.push(user);
      


      
    }

    const updateCurrent = (user) =>{
        setCurrent(user)
    }

    const updateUser =  (user) =>{
        var userRef = firebase.database().ref('Users/' + user.id);
        userRef.update({...user})
        
    }

    const deleteUser =  (id) =>{

       var userRef = firebase.database().ref('Users/' + id);
       userRef.on("value",(snapshot)=>{
           console.log(snapshot.val())
       })
        userRef.remove()
        .then(function() {
            console.log("Remove succeeded.")
        })
        .catch(function(error) {
            console.log("Remove failed: " + error.message)
        });
     }

    useEffect(()=>{
        const userRef = firebase.database().ref('Users');
        userRef.on("value", function(snapshot) {
            const usersFromFireBase = snapshot.val()
            const userf = []
            for(let el in usersFromFireBase){
                userf.push({...usersFromFireBase[el],id:el})
            }
            console.log('useEffect userContext')
            setUsers(userf)
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
    
    },[])
    
    return ( 
        <UserContext.Provider value={{users,addUser,updateUser,deleteUser,current,updateCurrent}}>
            {props.children}
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;