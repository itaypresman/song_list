import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongsRequest } from '@Services/SongService.js';



export default function () {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs.list);

    useEffect(() => {
        dispatch(getSongsRequest());
    }, []);

    console.log(songs);
    return (
        <div>
            Hello World
        </div>
    );
}
