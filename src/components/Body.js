import React from 'react'
import { useDataLayerValue } from '../DataLayer';
import './Body.css';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body() {

    const[{discover_weekly},dispatch] = useDataLayerValue(); 
    return (
        <div className='body'>
            <Header  />

            <div className="bodyinfo">
                <img 
                src={discover_weekly?.images[0]?.url}
                alt=""
                />
                <div className="bodyinfo_text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="bodysongs">
                <div className="bodyicons">
                    <PlayCircleFilledIcon className='shuffle' />
                    <FavoriteIcon className='ff' fontSize='large' />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item =>(
                    <SongRow track={item.track} />
                ))}
            </div>

        </div>
    )
}
export default Body
