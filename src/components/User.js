import React, { Component, useContext,useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import EditUser from './EditUser'
import useCheck from './useCheck'

const User = (props) => {
    const {users,addUser,updateUser,deleteUser} = useContext(UserContext);
    const {array,add} = useCheck(props.data);
    

    useEffect(()=>{
        add()
        return(()=>{
            document.title='Unmount'
        })
        
    },[])

   
    return ( 
     <div>
         Name: {props.data.FirstName}<br/>
         User Name: {props.data.UserName}<br/>
         Session Time Out: {props.data.sto}<br/>
         Created data:<br/>
         Permissions : { array.map((el,index,arry)=>{
             return index==arry.length-1?(`${el}`):(`${el}, `)
         })
            
         }<br/>


       

         <button onClick={()=>deleteUser(props.data.UserName)}>Delete</button>
         <button>
            <Link to={{
                pathname: '/Usermanagment/edit',
                state: {props}
            }}>Edit</Link>
         </button>


    </div> );
}
 
export default User;