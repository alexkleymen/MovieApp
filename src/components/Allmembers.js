import React, { Component,useContext } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import Member from './Member';

const Allmembers = (props) => {
    const {subscriptions,addSub,updateSub,deleteSub} = useContext(SubscriptionContext)
    return ( 
        <div>
            {subscriptions.map(sub=>{
                return(
                    <Member key={sub.id} data={sub}/>
                )
            })}
        </div>
     );
}
 
export default Allmembers;