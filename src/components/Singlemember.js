import React, { Component } from 'react';
import {useParams} from 'react-router-dom'

const Singlemember = () => {
    let parm = useParams()
    return ( 
        <div>
            {parm.id}
        </div>
     );
}
 
export default Singlemember;