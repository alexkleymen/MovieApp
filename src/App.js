import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditUser from './components/EditUser';
import Movies from './components/Movies'
import Submanagment from './components/Submanagment';

import MoviesContextProvider from './context/MoviesContext';
import SubscriptionProvider from './context/SubscriptionContext';
import UserContextProvider from './context/UserContext';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './components/Appbar';
import { makeStyles } from '@material-ui/core/styles';
import Usermanagment from './components/Usermanagment';
import {spacing} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarMargin: theme.mixins.toolbar,
  
  item : {
    [theme.breakpoints.down('sm')]: {
     
      
    }
  }
}));


function App() {
  const classes = useStyles();
  return (
    <Router>
    

    <Grid container direction="column" >
      <Grid item xs={12} >
        <Grid  className={classes.item} direction='column' container>
        <ButtonAppBar/>
        </Grid>
      </Grid>
      <Grid container >
      <Grid item xs={12}>
        <UserContextProvider>
        <MoviesContextProvider>
        <SubscriptionProvider>
        
        <Switch className>

          
          
          <Route exact path='/Movies' component={Movies}/>
          <Route exact path='/Subscriptions' component={Submanagment}/>
          <Route exact path='/Usermanagment' component={Usermanagment}/>

          
        </Switch>

        
      </SubscriptionProvider>
      </MoviesContextProvider>
      </UserContextProvider>
      </Grid>
      </Grid>
    </Grid>
    
    
    </Router>
  );
}

export default App;