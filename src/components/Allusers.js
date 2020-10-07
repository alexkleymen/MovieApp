import React, { Component,useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { v4 as uuidv4 } from 'uuid';
import User from './User';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
  }));

const Allusers = () => {
    const {users} =  useContext(UserContext);
    const classes = useStyles();
    return users.length ?( 
        <div className={classes.root}>
            <Grid container spacing={1} justify="space-around">
          {users.map(user=>{
              return(
                   
                  <User data={user}/>
              )
          })}
             </Grid>
        </div>
     ) : 

     (
         <h2>No Users Yet!</h2>
     )
}
 
export default Allusers;