export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after development finish..
    // token:'BQDevi1JVuMKHrCWQhcb26cT-afQVvVPPXXpkx6fBPOGl24IPfHQStG47sewlZOWBvsOx2U7zci1rk6UI7_dBl83xsbbCB2gtmAeucvzJkp_B4stMvxjVVxqz7EKwTndDQhAkr22hsHjivhmB-ehL2OwyyhDPd_bi2Th'
};

const reducer = (state, action) => {
    console.log(action);

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
        
        case 'set_DiscoverWeekly':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;