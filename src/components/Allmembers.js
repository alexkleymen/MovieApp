import React, { Component,useContext } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import Member from './Member';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
  
  }));
const Allmembers = (props) => {
    const {subscriptions,addSub,updateSub,deleteSub} = useContext(SubscriptionContext)
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Grid container spacing={3} justify="space-around">
            {subscriptions.map(sub=>{
                return(
                    <Member key={sub.id} data={sub}/>
                )
            })}
            </Grid>
        </div>
     );
}
 
export default Allmembers;