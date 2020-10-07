import React, { Component,useReducer,useContext } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

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

            <TextField  required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.Name} name='Name' label="Name"/><br/>
                
            <TextField  required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.Email} name='Email' label="Email"/><br/>
           
            <TextField  required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={member.City} name='City' label="City"/><br/>

            <Button onClick={addMember} color="primary">Save</Button>
            <Button onClick={()=>history.goBack()} color="primary">Cancel</Button>

        </div>
     );
}
 
export default Addmember;