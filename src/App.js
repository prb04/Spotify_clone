import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from "./components/Login";
import Player from './components/Player';
import { getTokenfromURL } from './spotify';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();


  //useEffect runs a code based on given condition
  useEffect(() => {
    const hash = getTokenfromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token);

      //gives user details
      spotify.getMe().then(user => {
        dispatch({
          type:'set_User',
          user: user,
        });
        console.log("Idhar dekh MC",user);
      })
    } 

    console.log("Idhar dekh lavde 👉",token);
  }, [dispatch, token]);


  return (
    <div className="App">
      {
        token ? (<Player />) : ( <Login />)
      }
    </div>
  );
}

export default App;
