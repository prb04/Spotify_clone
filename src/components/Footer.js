import React from 'react'
import './Footer.css';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import PauseCircleFilledOutlinedIcon from '@material-ui/icons/PauseCircleFilledOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid,Slider } from '@material-ui/core';


function Footer() {
    return (
        <div className='footer'>
            <div className='f_left'>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/en/e/e9/Tupac_Shakur_-_Loyal_to_the_Game.jpg' alt='' />
                <div className='f_songinfo'>
                    <h4>Loyal to the Game</h4>
                    <p>2Pac</p>
                </div>
            </div>

            <div className='f_center'>
                <ShuffleOutlinedIcon classname='f_icon' />
                <SkipPreviousOutlinedIcon className='f_icon' />
                <PlayCircleFilledOutlinedIcon fontSize='large' className='f_icon1' />
                <SkipNextOutlinedIcon className='f_icon' />
                <RepeatRoundedIcon className='f_icon' />
            </div>

            <div className='f_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
