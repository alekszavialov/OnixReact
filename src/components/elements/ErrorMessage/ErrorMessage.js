import React from 'react';
import PropTypes from 'prop-types';

import '../../../scss/components/elements/ErrorMessage/errorMessage.scss';

export default function ErrorMessage({message = 'Error'}) {
    return(
        <h2 className="loading-error">{message}</h2>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string
};