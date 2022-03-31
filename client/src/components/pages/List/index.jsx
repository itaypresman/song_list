import React from 'react';
import { useDispatch } from 'react-redux';
import { getSongsRequest } from '@Services/SongService.js';
import UploadFile from '@Components/UploadFile/index.jsx';


export default function () {
    const dispatch = useDispatch();

    const onUploadFileClick = () => {
        dispatch(getSongsRequest());
    };

    return (
        <div>
            <UploadFile onClick={onUploadFileClick}/>
        </div>
    );
}
