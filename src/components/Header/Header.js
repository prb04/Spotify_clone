import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import {useDataLayerValue} from '../../data/DataLayer';

function Header() {

    const[{user}] = useDataLayerValue(); 
     
    return (
        <div className='header'>
            <div className='h_left'>
                <SearchIcon />
                <input 
                    placeholder='Artists, songs or podcasts'
                    type='text'
                />
            </div>

            <div className='h_right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header
