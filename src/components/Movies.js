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

const Movies = () => {
    const match = useRouteMatch();
    return ( 
    <Router>
    <div>
        <h2>Movie</h2>
        <ul>
            <li>
                <Link to={match.path + '/allmovies'}>All Movies</Link>
            </li>

            <li>
                <Link to={match.path + '/addmovie'}>Add movie</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path={match.path + '/allmovies'} component={Allmovies}/>
            <Route exact path={match.path + '/addmovie'} component={Addmovie}/>
            <Route exact path={match.path + '/editmovie'} component={Editmovie}/>
        </Switch>
    </div> 
    </Router>);
}
 
export default Movies;