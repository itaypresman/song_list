import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: [],
    error: null,
    is_loading: false,
    is_uploading: false,
};

const SongSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setError(state, action) {
            state.error = action.payload || null;
        },
        setSongs(state, action) {
            state.list = action.payload;
            state.error = null;
        },
        setIsLoading: (state, action) => {
            state.is_loading = action.payload;
        },
        setIsUploading: (state, action) => {
            state.is_uploading = action.payload;
        },
    }
});


export const { setSongs, setError, setIsLoading, setIsUploading } = SongSlice.actions;
export default SongSlice.reducer;
