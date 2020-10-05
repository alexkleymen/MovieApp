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


const Submanagment = (props) => {
    const match = useRouteMatch()
    return ( 
        <Router>
        <div style={{'margin-top': '70px'}}>
            <h2>Subscriptions</h2>
            <ul>
                <li>
                    <Link to={match.path + '/allmembers'}>All Members</Link>
                </li>

                <li>
                    <Link to={match.path + '/addmember'}>Add Member</Link>
                </li>

                
            </ul>

            <Switch>
            <Route exact path={match.path + '/allmembers'} component={Allmembers}/>
            <Route exact path={match.path + '/addmember'} component={Addmember}/>
            <Route exact path={match.path + '/editmember'} component={Editmember}/>
            </Switch>
        </div>
        </Router>);
}
 
export default Submanagment;