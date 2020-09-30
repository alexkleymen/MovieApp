import React, { Component,useState,useContext,useReducer,useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


const initialState = {
    FirstName: '',
    LastName: '',
    UserName: '',
    sto: '',
    'View Subscriptons': false,
    'Create Subscriptons': false,
    'Delete Subscriptons':false,
    'Update Subscriptons':false,
    'View Movies':false,
    'Create Movies':false,
    'Delete Movies': false,
    'Update Movies': false,
}


function reducer(state,action){
    if(action.type=='end'){
        return {...state,...initialState}
    }

    else if(action.type=='check'){
        return{...state,[action.name] : !state[action.name]}
    }
    else {
        return{...state, [action.name] : action.value}
    }
}


const Adduser = (props) => {
const [user, dispatch] = useReducer(reducer,initialState);
const {users,addUser} =  useContext(UserContext);

const handleSubmit = (e) =>{
    let temp = {...user}
    dispatch({type: 'end'})
    e.preventDefault();
    addUser({...temp})
    
}



    return (
         <div>
             <form onSubmit={handleSubmit}>
                
                 <TextField  required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={user.FirstName} name='FirstName' label="FirstName"/><br/>
                
                 <TextField required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={user.LastName} type='text' name='LastName' label="Last Name" /><br/>
        
                 <TextField required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})} value={user.UserName} type='text' name="UserName" label="User Name" /><br/>
                 
                 <TextField required onChange={(e)=>dispatch({name: e.target.name , value: e.target.value})}  value={user.sto} name='sto' label="Set Time Out" /><br/>
                
            
                    
                    <FormControlLabel
                    control={<Checkbox  checked={user['View Subscriptons']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='View Subscriptons' value={user['View Subscriptons']} label="View Subscriptons"/><br/>

                    <FormControlLabel
                    control={<Checkbox  checked={user['Create Subscriptons']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='Create Subscriptons' value={user['Create Subscriptons']} label="Create Subscriptons"/><br/>
               
                   <FormControlLabel
                    control={<Checkbox  checked={user['Delete Subscriptons']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='Delete Subscriptons' value={user['Delete Subscriptons']} label="Delete Subscriptons"/><br/>

                    <FormControlLabel
                    control={<Checkbox  checked={user['Update Subscriptons']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='Update Subscriptons' value={user['Update Subscriptons']} label="Update Subscriptons"/><br/>

                   
                    <FormControlLabel
                    control={<Checkbox  checked={user['View Movies']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='View Movies' value={user['View Movies']} label="View Movies"/>   <br/> 

                    <FormControlLabel
                    control={<Checkbox  checked={user['Create Movies']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='Create Movies' value={user['Create Movies']} label="Create Movies"/>   <br/> 
                     
                    <FormControlLabel
                    control={<Checkbox  checked={user['Delete Movies']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='Delete Movies' value={user['Delete Movies']} label="Delete Movies"/>  <br/>  
                     
                    <FormControlLabel
                    control={<Checkbox  checked={user['Update Movies']} onChange={(e)=>dispatch({type:'check' ,name: e.target.name , value: e.target.value})}/>} 
                    name='Update Movies' value={user['Update Movies']} label="Update Movies"/>   <br/> 

                     
                    <Button type='submit' variant="contained">Submit</Button>
                     
                
             </form>
         </div>
          );
}
 
export default Adduser;