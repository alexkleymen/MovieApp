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
     
    },
    link:{
        textDecoration: 'none',
        color : 'inherit'
          
      }
  }));



  

const Login = () => {
    const classes = useStyles();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    let history = useHistory();
    const {users,updateCurrent} =  useContext(UserContext);

    
  function handleSubmit(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
    updateCurrent(email)
    history.push("/")   
    })
    .catch(function(error) {
    alert(error.message)
    setEmail('')
    setPassword('')
    });
    }


    return ( 
    
    <div style={{'margin-top': '70px', 'textAlign': 'center'}} onSubmit={handleSubmit}>
 
    <form className={classes.root} noValidate autoComplete="off" >
      <TextField  onChange={e=>setEmail(e.target.value)} value={email} required id="standard-basic" label="Email" /><br/>
      <TextField onChange={e=>setPassword(e.target.value)} value={password} type='password' required id="standard-basic" label="Password" /><br/>

      <Button type='submit' variant="contained" color="primary">Login</Button><br/>

      <Button style={{background: '#42b72a'}}  variant="contained" color="primary">
      <Link  className={classes.link} to='/register'>Register</Link>  
      
      </Button><br/>

      
    </form>
    </div> 
   
)};
 
export default Login;
