import React, { Component,useReducer,useContext,useEffect } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import {useHistory,useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

<TextField required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.name} type='text' name='name' label="Name" /><br/>
            

<TextField required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.email} type='text' name='email' label="Email" /><br/>

<TextField required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})}  value={member.city} type='text' name='city' label="City" /><br/>



<Button onClick={editMember} variant="contained">Update</Button>
<Button onClick={()=>history.goBack()} variant="contained">Cancel</Button>
            
          

        </div>
     );
}
 
export default Editmember;