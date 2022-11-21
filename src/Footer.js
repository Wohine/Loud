import React, { useEffect, useState } from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import {Grid, Slider} from '@mui/material';
import Spiller from './Spiller';

function Footer() {

    const [songs, setsongs] = useState([
        {
           title: "song 1",
           artist: "artist 1",
           img_src: "./images/img1.jpg",
           src: "./songs/Måneskin - Beggin ( Testo)_2.mp3",
        },
        {
           title: "song 2",
           artist: "artist 2",
           img_src: "./images/img2.jpg",
           src: "./songs/Young Dumb & Broke Khalid .mp3",
        },
      ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    return (
      <div className='footer'>
        <Spiller
            song={songs[currentSongIndex]}
            nextSong={songs[nextSongIndex]}
        />
      </div>
    )
}

export default Footer