import React, { Component,useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { v4 as uuidv4 } from 'uuid';
import User from './User';


const Allusers = () => {
    const {users} =  useContext(UserContext);
    return users.length ?( 
        <div>
          {users.map(user=>{
              return(
                  <User data={user}/>
              )
          })}
        </div>
     ) : 

     (
         <h2>No Users Yet!</h2>
     )
}
 
export default Allusers;