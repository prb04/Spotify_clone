import React, { useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from "./components/Login/Login.js";
import Player from './components/Player/Player';
import { getTokenfromURL } from './spotify';
import {useDataLayerValue} from "./data/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  //useEffect runs a code based on given condition
  useEffect(() => {
    const hash = getTokenfromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token){
      dispatch({
        type: 'set_Token',
        token: _token,
      });
      spotify.setAccessToken(_token);

      //gives user details
      spotify.getMe().then(user => {
        dispatch({
          type:'set_User',
          user: user,
        });
        console.log("Idhar dekh MC",user);
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:'set_Playlist',
          playlists:playlists,
        })
        console.log("playlists",playlists);
      })

    } 

    console.log("Idhar dekh lavde 👉",token);
  }, [dispatch, token]);

  return (
    <div className="App">
      {
        token ? (<Player spotify = {spotify} />) : <Login />
      }
    </div>
  );
}

export default App;
