import React, { Component ,useContext,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



import { useRouteMatch } from "react-router-dom";
import Allmembers from './Allmembers'
import addmember from './Addmember'
import Adduser from './Adduser';
import Addmember from './Addmember';
import Editmember from './Editmember';
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



const Submanagment = (props) => {
    const match = useRouteMatch()
    const classes = useStyles();

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    return ( 
        <Router>
        <div style={{'margin-top': '70px'}}>


            <Breadcrumbs aria-label="breadcrumb">
                    <Linkk color="inherit"  onClick={handleClick} className={classes.Linkk}>
                        <GroupIcon className={classes.icon} />
                        <Link className={classes.link} to={match.path + '/allmembers'}>All Members</Link>
                    </Linkk>


                    <Linkk color="inherit" onClick={handleClick} className={classes.Linkk}>
                        <PersonAddIcon className={classes.icon} />
                        <Link className={classes.link} to={match.path + '/addmember'}>Add Member</Link>
                    </Linkk>
            </Breadcrumbs>

            <Switch>
            <Route exact path={match.path + '/allmembers'} component={Allmembers}/>
            <Route exact path={match.path + '/addmember'} component={Addmember}/>
            <Route exact path={match.path + '/editmember'} component={Editmember}/>
            </Switch>
        </div>
        </Router>);
}
 
export default Submanagment;