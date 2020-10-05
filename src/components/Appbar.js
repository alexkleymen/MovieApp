import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
  link : {
    textDecoration: 'none',
    color : 'inherit'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MovieFilterIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movies
          </Typography>
          <Button color="inherit">
            <Link className={classes.link} to='/Movies'>Movies</Link>
          </Button>
          <Button color="inherit">
          <Link className={classes.link} to='/Subscriptions'>Subscriptopn</Link>
          </Button>
          <Button color="inherit">
          <Link className={classes.link} to='/Usermanagment'>Users</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}




