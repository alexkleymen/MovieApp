import React, { Component,useEffect,useState } from 'react';
 const useCheck = (initialState) => {
     const [array,setArray] = useState([])

     const add = () => {
        var temp = [...array]
        for (const p in initialState){
            if(p.includes(' ') && initialState[p]){
                temp.push(p)
                setArray(temp)
            }

        }
        
     } 
     return {
         array,
         add
     };
 }
  
 export default useCheck;