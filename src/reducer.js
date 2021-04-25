export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    current_playlist:null,
    tracks:null,
    track:null,
    token:null,
};

const reducer = (state, action) => {

    switch (action.type) {
        
        case 'set_User':
            return{
                ...state,
                user:action.user,
            }
        
        case 'set_Token':
            return{
                ...state,
                token:action.token,
            }
            
        case 'set_Playlist':
            return{
                ...state,
                playlists:action.playlists,
            }
        
        case 'set_Current_playlist':
            let currentPlaylist = null;
            state.playlists.items.forEach(playlist =>{
                if(playlist.id ===action.id){
                    currentPlaylist = playlist;
                }
            })
        
        return{
            ...state,
            current_playlist: currentPlaylist
        }

        
        case 'set_Tracks':
            return{
                ...state,
                tracks: action.tracks
            }
        
        case 'set_Track':
            return{
                ...state,
                track:action.track
            }    

        default:
            return state;
    }
}

export default reducer;