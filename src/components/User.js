import React, { Component, useContext,useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import EditUser from './EditUser'
import useCheck from './useCheck'
import {Grid} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      maxheight: 800,
      marginBottom: '4px'
    },
    media: {
      height: 450,
      width: 345,
      objectFit: "cover",
      
    },
    link : {
      textDecoration: 'none',
      color : 'inherit'
    },
  });


const User = (props) => {
    const {users,addUser,updateUser,deleteUser} = useContext(UserContext);
    const {array,add} = useCheck(props.data);
    
    const classes = useStyles()

    useEffect(()=>{
        add()
        return(()=>{
            document.title='Unmount'
        })
        
    },[])

   
    return ( 
    <Grid item xs={3}>
        
        <Paper style={{padding: '4px'}}>
         Name: {props.data.FirstName}<br/>
         User Name: {props.data.UserName}<br/>
         Session Time Out: {props.data.sto}<br/>
         Created data:<br/>
         Permissions : { array.map((el,index,arry)=>{
             return index==arry.length-1?(`${el}`):(`${el}, `)
         })
            
         }<br/>


        <Button onClick={()=>deleteUser(props.data.UserName)} size="small" color="primary">Delete</Button>
        <Button    size="small" color="primary">
            <Link className={classes.link}  to={{
                    pathname: '/Usermanagment/edit',
                    state: {props}
                }}>Edit
            </Link>
        </Button>
         
       


       

        
        </Paper>
    </Grid> );
}
 
export default User;