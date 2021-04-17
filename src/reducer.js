export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'set_User':
            return{
                ...state,
                user:action.user
            }
    
        default:
            return state;
    }
}

export default reducer;