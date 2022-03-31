import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    songs: [],
    error: null,
    is_loading: true,
};

const SongSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setError(state, action) {
            state.error = action.payload || null;
        },
        setSongs(state, action) {
            state.songs = action.payload;
            state.error = null;
        },
        setIsLoading: (state, action) => {
            state.is_loading = action.payload;
        }
    }
});


export const { setSongs, setError, setIsLoading } = SongSlice.actions;
export default SongSlice.reducer;
