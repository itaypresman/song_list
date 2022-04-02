import React from 'react';
import UploadFile from '@Components/UploadFile/index.jsx';
import { useDispatch } from 'react-redux';
import { uploadRequest } from '@Services/SongService.js';


export default function () {
    const dispatch = useDispatch();
    const uploadFile = (e) => {
        e.preventDefault();

        if (e.target.files[0]) {
            dispatch(uploadRequest(e.target.files[0]));
        }
    };

    return (
        <div>
            <UploadFile onChange={ uploadFile }/>
        </div>
    );
}
