import React, { Component,useContext,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import { useRouteMatch } from "react-router-dom";
  import Allmovies from './Allmovies'
  import Addmovie from './Addmovie'
  import Editmovie from './Editmovie'
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
import Singlemember from './Singlemember';

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

  

const Movies = () => {
    const match = useRouteMatch();
    const classes = useStyles();
    return ( 
    <Router>
        <div style={{'margin-top': '70px'}}>
          <Breadcrumbs aria-label="breadcrumb">
        <Linkk color="inherit" href="/" onClick={handleClick} className={classes.Linkk}>
          <GroupIcon className={classes.icon} />
          <Link className={classes.link} to={match.path + '/allmovies'} >All Movies</Link>
        </Linkk>
        <Linkk
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.Linkk}
        >
          <PersonAddIcon className={classes.icon} />
          <Link  className={classes.link} to={match.path + '/addmovie'} >Add Movie</Link>
        </Linkk>
      </Breadcrumbs>

        <Switch>
            <Route exact path={match.path + '/allmovies'} component={Allmovies}/>
            <Route exact path={match.path + '/addmovie'} component={Addmovie}/>
            <Route exact path={match.path + '/editmovie'} component={Editmovie}/>
            <Route exact path={match.path + '/:id'} component={Singlemember}/> 
            
        </Switch>
    </div> 
    </Router>);
}
 
export default Movies;