import React, { useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from "./components/Login";
import Player from './components/Player';
import { getTokenfromURL } from './spotify';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{user,token}, dispatch] = useDataLayerValue();

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
        console.log("asdaf",playlists);
      })

      spotify.getPlaylist('37i9dQZEVXcF4KxPMggWB0').then(response =>{
        dispatch({
          type:'set_DiscoverWeekly',
          discover_weekly:response,
        })
        console.log("karle lavde",response);
      })
    } 

    console.log("Idhar dekh lavde 👉",token);
  }, []);

    console.log('🚗',user);
    console.log('🚓',token);

  return (
    <div className="App">
      {
        token ? (<Player spotify = {spotify} />) : ( <Login />)
      }
    </div>
  );
}

export default App;
