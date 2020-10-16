import React, { useEffect,useContext } from 'react';
import firebase from '../utils/firebase'
import { UserContext } from '../context/UserContext';
import {useHistory} from 'react-router-dom'



const Home = () => {
  const history = useHistory()
  const {current} =  useContext(UserContext);

  useEffect(()=>{
    if(!current){
      history.push("/login")
    }
  },[])


    
    return   ( 
        <div style={{'margin-top': '70px', 'textAlign': 'center'}}>
            <img style={{'max-width': '100%','max-height': '100%'}} src='https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg'></img>
        </div>
     );
}
export default Home;