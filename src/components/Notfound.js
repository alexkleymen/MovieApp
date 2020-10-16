import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const NotFound = () => (

    
  <div style={{'margin-top': '70px', 'textAlign': 'center'}}>
    <h1>404 - Not Found!</h1>

    <Button variant="contained" color="primary" href="#contained-buttons">
        <Link to="/">
        Go Home
        </Link>
    </Button>
    
  </div>
);

export default NotFound;