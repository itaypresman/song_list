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

export const uploadRequest = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));

        const response = await axios.get(process.env.API_URL + '/list');
        dispatch(setSongs(response.data));
    } catch (e) {
        dispatch(setError(e.message));
    }

    dispatch(setIsLoading(false));
}
