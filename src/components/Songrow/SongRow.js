import React from 'react'
import { useDataLayerValue } from '../../data/DataLayer'
import { useSoundLayerValue } from '../../data/SoundLayer';
import './SongRow.css'

function SongRow({track}) {

    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useDataLayerValue();
    const [{playing, repeat}, soundDispatch] = useSoundLayerValue();

    const changeTrack = (e, track) => {
        dispatch({
            type: 'set_Track',
            track:track
        })

        let wasPlaying = playing;
        soundDispatch({
            type: 'set_Playing',
            playing:false,
        })

        let audio = new Audio(track.preview_url);
        audio.loop = repeat;
        soundDispatch({
            type: 'set_Audio',
            audio: audio
        })

        if(wasPlaying){
            soundDispatch({
                type: 'set_Playing',
                playing: true,
            })
        }

        document.title = `${track.name} · ${track.artists.map((artist) => artist.name).join(', ')}`
    }

    return (
        <div className='songrow' onClick={e => changeTrack(e, track)}>
            <img className='sr_album' src={track.album.images[0].url} alt="" />
            <div className="sr_info">
              <h1>{track.name}</h1>
              <p>
                  {track.artists.map(artist => artist.name).join(", ")}
              </p>  
              <p>{track.album.name}</p>
            </div>
        </div>
    )
}

export default SongRow
