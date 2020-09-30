import React, { Component,createContext,useState,useEffect } from 'react';
import axios from 'axios'

export const SubscriptionContext = createContext()

const SubscriptionProvider = (props) => {
    const [subscriptions,setSubscriptions] = useState([])

    const addSub = (sub) =>{
        setSubscriptions([...subscriptions,sub])
    }

    const addMovieToSub = (movie,id) => {
        let temp = [...subscriptions]
        let index = temp.findIndex(el=>el.id==id)
        temp[index].movies.push(movie)
        setSubscriptions([...temp])
    }

    const updateSub = (obj) =>{
        let temp = [...subscriptions]
        temp = temp.filter(sub=>sub.id!=obj.id)
        temp.push(obj)
        setSubscriptions(temp)
    }

    const deleteSub = (id) =>{
        setSubscriptions(subscriptions.filter(sub=>sub.id!=id))
    }

    useEffect (()=>{
        //axios.get('https://jsonplaceholder.typicode.com/users').then(resp=>setSubscriptions(resp.data))
        t();
        async function t(){
        let temp = await axios.get('https://jsonplaceholder.typicode.com/users')
        temp=temp.data
        temp = temp.map(t=>{return({
            ...t,movies:[]
        })})
        setSubscriptions(temp)
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
