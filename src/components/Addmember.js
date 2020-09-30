import React, { Component,useReducer,useContext } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    Name: '',
    Email: '',
    City: ''
} 

function reducer(state,action){
    if(action.type=='end'){
        return {...state,...initialState}
    }
    else {
        return{...state, [action.name] : action.value}
    }
}

const Addmember = (props) => {
    const {subscriptions,addSub,updateSub,deleteSub,addMovieToSub} = useContext(SubscriptionContext)
    const [member,dispatch] = useReducer(reducer,initialState);
    const history = useHistory();

    const addMember = () =>{
        let obj = {}
        obj.name = member.Name
        obj.email = member.Email
        obj.address = {}
        obj.address.city = member.City
        obj.movies = []
        obj.id = uuidv4()
        dispatch({type:'end'})
        addSub(obj)
    }
    
    return ( 
        <div>
            <label>Name:</label>
           <input onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.Name} name='Name' type='text'></input> <br/>

            <label>Email:</label>
            <input  onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})}  value={member.Email} name='Email' type='text'></input> <br/>

            <label>City:</label>
            <input  onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.City} name='City' type='text'></input> <br/>

            <button onClick={addMember}>Save</button>
            <button onClick={()=>history.goBack()}>Cancel</button>

        </div>
     );
}
 
export default Addmember;