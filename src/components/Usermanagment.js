import React, { Component ,useContext,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useRouteMatch } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import Adduser from './Adduser';
import Allusers from './Allusers'
import EditUser from './EditUser';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Linkk from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';
import {spacing} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    Linkk: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    link : {
        textDecoration: 'none',
        color : 'inherit'
      },

    pad : {
        paddingLeft: '5px',
        paddingTop: '10px'
        
    }
    
  }));


  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const Usermanagment = () => {
    const classes = useStyles();
    const {users,addUser,updateUser} = useContext(UserContext)
    const match = useRouteMatch();
    return ( 
        <Router>
    <div style={{'margin-top': '70px'}}>
        <Breadcrumbs aria-label="breadcrumb">
      <Linkk color="inherit" href="/" onClick={handleClick} className={classes.Linkk}>
        <GroupIcon className={classes.icon} />
        <Link className={classes.link} to={match.path + '/allusers'} >All Users</Link>
      </Linkk>
      <Linkk
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.Linkk}
      >
        <PersonAddIcon className={classes.icon} />
        <Link  className={classes.link} to={match.path + '/adduser'} >Add user</Link>
      </Linkk>
    </Breadcrumbs>

        <Switch>
            <Route exact path={match.path + '/allusers'} component={Allusers}/>
            <Route exact path={match.path + '/adduser'} component={Adduser}/>
            <Route exact path={match.path + '/edit'} component={EditUser}/>
            
        </Switch>
    </div> 
    </Router>);
}
 
export default Usermanagment;