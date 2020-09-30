import React, { Component,useReducer,useContext,useEffect } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import {useHistory,useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    name: '',
    email: '',
    city: ''
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

const Editmember = (props) => {
    const {subscriptions,addSub,updateSub,deleteSub,addMovieToSub} = useContext(SubscriptionContext)
    const [member,dispatch] = useReducer(reducer,initialState);
    const history = useHistory();
    const location = useLocation();

    const editMember = () =>{
        let obj = {...location.state}
        obj.name = member.name
        obj.email = member.email
        obj.address.city = member.city
        updateSub(obj)
        dispatch({type:'end'})
        
    }


    useEffect(()=>{
        dispatch({type:'init', value: {...location.state,city: location.state.address.city}})
    },[])
    
    return ( 
        <div>
            <label>Name:</label>
           <input onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.name} name='name' type='text'></input> <br/>

            <label>Email:</label>
            <input  onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})}  value={member.email} name='email' type='text'></input> <br/>

            <label>City:</label>
            <input  onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.city} name='city' type='text'></input> <br/>

            <button onClick={editMember}>Update</button>
            <button onClick={()=>history.goBack()}>Cancel</button>

        </div>
     );
}
 
export default Editmember;