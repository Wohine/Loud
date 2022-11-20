import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useStateValue();

  useEffect(() => {

    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch ({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });

    }

    console.log("I have a token>>>", token);
  }, [dispatch, token]);

  console.log("User log", user)
  console.log("Token log", token)

  return (
    <div className="App"> 
      {user ? (<Player spotify={spotify}/>) : (<Login />)}
    </div>
  );
}

export default App;