export const initialState = {
    user: null,
    item: null,
    playlistArray: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title,
            }

        case 'SET_IMAGE':
            return {
                ...state,
                image: action.image,
            }

        case "ADD_TO_PLAYLIST":
            return {
                ...state,
                playlistArray: [...state.playlistArray, action.item],
            };

        case 'EMPTY_PLAYLIST':
            return {
                ...state,
                playlistArray: []
            }

        default:
            return state;
    }
}

export default reducer;