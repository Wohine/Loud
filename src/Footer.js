import React from 'react'
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

function Footer() {
    return (
      <div className='footer'>
        <div className='footer__left'>
            <img className='footer__albumLogo' src='http://ukf.com/wp-content/uploads/2014/08/darude-sandstorm.jpg' alt=''></img>
            <h4 className='footer__songTitle'>Sandstorm</h4>
            <p>Darude</p>
        </div>

        <div className='footer__center'>
            <ShuffleIcon className='footer__icon'/>
            <SkipPreviousIcon className='footer__icon'/>
            <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
            <SkipNextIcon className='footer__icon'/>
            <RepeatIcon className='footer__icon'/>
        </div>

        <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider className="footer__volumeSlider" max={100} valueLabelDisplay="auto" aria-labelledby="continous-slider"/>
                </Grid>
            </Grid>
        </div>
      </div>
    )
}

export default Footer