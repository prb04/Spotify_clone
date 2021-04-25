import React from 'react';
import { useDataLayerValue } from '../../data/DataLayer';
import "./SidebarOption.css";

function SidebarOption({spotify,title,id,Icon}) {

    // eslint-disable-next-line no-empty-pattern
    const[{},dispatch] = useDataLayerValue();

    const ChangePlaylist = (id, e) => {
        dispatch({
            type:'set_Current_playlist',
            id: id
        })

        
        spotify.getPlaylistTracks(id).then(response => {
            dispatch({
                type: 'set_Tracks',
                tracks: response,
            })

            console.log("abc",response);
        })
    }
    
    return (
        <div className="op">
            {Icon && <Icon className='op_icon'/>}
            {Icon ? <h4>{title}</h4>: <p onClick={(e) => ChangePlaylist(id,e)}>{title}</p>}
        </div>
    )
}

export default SidebarOption
