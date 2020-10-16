import React, { Component,useContext,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

  import { makeStyles } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
  import Button from '@material-ui/core/Button';
  import firebase from '../utils/firebase'
  import {UserContext} from '../context/UserContext'

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      link:{
        textDecoration: 'none',
        color : 'inherit'
          
      }
    },
  }));


  

  

const Register = () => {
    const classes = useStyles();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    var history = useHistory()
    const {users,updateCurrent} =  useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        if(users.filter(user=>user.UserName==email).length){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
        history.push("/") 
        const userRef = firebase.database().ref('Users'); 
        })
        .catch(function(error) {
        alert(error.message)
        setEmail('')
        setPassword('')
        });
      }
      else{
        (alert('no such username'))
        setPassword('')
        setEmail('')
      }
        }

    return ( 
    
    <div style={{'margin-top': '70px', 'textAlign': 'center'}} onSubmit={handleSubmit}>
 
    <form className={classes.root} noValidate autoComplete="off" >
      <TextField  onChange={e=>setEmail(e.target.value)} value={email} required id="standard-basic" label="Email" /><br/>
      <TextField onChange={e=>setPassword(e.target.value)} value={password} type='password' required id="standard-basic" label="Password" /><br/>
      <Button type='submit' style={{background: '#42b72a'}}  variant="contained" color="primary">Register</Button>
      
      
    </form>
    </div> 
   
)};
 
export default Register;
