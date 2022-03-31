import React from 'react';
import PropTypes from 'prop-types';


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};


export default function Button({ onClick }) {
    return (
        <input type={ 'file' } onClick={ onClick }/>
    );
}
