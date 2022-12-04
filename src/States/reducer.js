export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
}

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

        default:
            return state;
    }
}

export default reducer;