export const soundInitialState = {
    audio:null,
    playing:false,
    volume:0.3,
    repeat:false,
    shuffle:false,
};


const soundReducer = (state, action) => {
    switch (action.type) {

        case 'set_Audio':
            return {
                ...state,
                audio: action.audio
            };

        case 'set_Playing':
            if(!action.playing) {
                if(state.audio) {
                    state.audio.pause();
                }
            } else {
                if(state.audio) {
                    state.audio.play();
                }
            }
            return {
                ...state,
                playing: action.playing
            };

        case 'set_Volume':
            if(state.audio) {
                state.audio.volume = action.volume;
            }
            return {
                ...state,
                volume: action.volume,
            };

        case 'set_Repeat':
            if(state.audio) {
                state.audio.loop = action.repeat;
            }
            return {
                ...state,
                repeat: action.repeat,
            };

        case 'set_Shuffle':
            if(state.audio) {
                return {
                    ...state,
                    shuffle: action.shuffle
                };
            }
            return state;

            
        default:
            return state;
    }
};

export default soundReducer;