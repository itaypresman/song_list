import React from 'react';
import PropTypes from 'prop-types';


UploadFile.prototype = {
    onChange: PropTypes.func.isRequired,
};


export default function UploadFile({ onChange }) {
    return (
        <input
            accept='text/csv'
            multiple
            type='file'
            onChange={ onChange }
        />
    );
}
