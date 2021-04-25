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
import { useDataLayerValue } from '../../data/DataLayer';
import { useSoundLayerValue } from '../../data/SoundLayer';


function Footer() {

    const[{track, tracks}, dispatch] = useDataLayerValue();
    const[{audio, playing, volume, repeat, shuffle}, soundDispatch] = useSoundLayerValue();

    const startPlaying = () => {
        soundDispatch({
            type: "set_Playing",
            playing: true
        });
        soundDispatch({
            type: "set_Volume",
            volume: volume / 100
        });
    };

    const stopPlaying = () => {
        soundDispatch({
            type: "set_Playing",
            playing: false
        });
    };

    const setRepeat = () => {
        if(!repeat && shuffle) {
            setShuffle();
        }
        soundDispatch({
            type: "set_Repeat",
            repeat: !repeat
        });
    };

    const setShuffle = () => {
        if(!shuffle && repeat) {
            setRepeat();
        }
        soundDispatch({
            type: "set_Shuffle",
            shuffle: !shuffle
        });
    };

    const handleChange = (event, value) => {
        soundDispatch({
            type: "set_Volume",
            volume: value / 100
        });
    };

    if(audio) {
        audio.onended = () => {
            if(shuffle) {
                while(true) {
                    let randomTrackNumber = Math.floor((Math.random() * tracks.items.length));
                    let randomTrack = tracks.items[randomTrackNumber].track;
                    if(track !== randomTrack) {
                        dispatch({
                            type: 'set_Track',
                            track: randomTrack
                        });

                        let wasPlaying = playing;
                        soundDispatch({
                            type: 'set_Playing',
                            playing: false,
                        });

                        let audio = new Audio(randomTrack.preview_url);
                        audio.loop = repeat;
                        soundDispatch({
                            type: 'set_Audio',
                            audio: audio
                        });

                        if(wasPlaying) {
                            soundDispatch({
                                type: 'set_Playing',
                                playing: true,
                            });
                        }

                        document.title = `${randomTrack.name} · ${randomTrack.artists.map((artist) => artist.name).join(', ')}`
                        break
                    }
                }
            }
            if(!shuffle && !repeat) {
                soundDispatch({
                    type: 'set_Playing',
                    playing: false,
                });
            }
        }
    }


    return (
        <div className='footer'>
            <div className='f_left'>
                <img className='logo' src={track ? track.album.images[0].url : ''} alt='' />
                <div className='f_songinfo'>
                    <h4>{track ? track.name : 'No song selected'}</h4>
                    <p>{track ? track.artists.map((artist) => artist.name).join(", ") : null}</p>
                </div>
            </div>

            <div className='f_center'>
                <ShuffleOutlinedIcon onClick={track ? setShuffle : null} classname='f_icon' />
                <SkipPreviousOutlinedIcon className='f_icon' />
                {playing ? <PauseCircleFilledOutlinedIcon onClick={track ? stopPlaying : null} fontSize='large' className='f_icon1' /> 
                    : 
                    <PlayCircleFilledOutlinedIcon onClick={track ? startPlaying : null} fontSize='large' className='f_icon1' /> }
                <SkipNextOutlinedIcon className='f_icon' />
                <RepeatRoundedIcon onClick={track ? setRepeat : null} className='f_icon' />
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
                        <Slider 
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="off"
                            onChange={handleChange}
                            min={0}
                            max={100}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
