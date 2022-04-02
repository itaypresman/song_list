import { setSongs, setError, setIsLoading } from '../store/SongSlice.js';
import axios from 'axios';


export const getSongsRequest = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));

        const response = await axios.get(process.env.API_URL + '/list');
        dispatch(setSongs(response.data));
    } catch (e) {
        dispatch(setError(e.message));
    }

    dispatch(setIsLoading(false));
}

export const uploadRequest = (file) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));

        const data = new FormData();
        data.set('file', file);

        const response = await axios.post(process.env.API_URL + '/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        });

        dispatch(setSongs(response.data));
    } catch (e) {
        dispatch(setError(e.message));
    }

    dispatch(setIsLoading(false));
}
