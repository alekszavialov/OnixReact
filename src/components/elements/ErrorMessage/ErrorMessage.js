import React from 'react';
import PropTypes from 'prop-types';

import '../../../scss/components/elements/ErrorMessage/errorMessage.scss';

errorMessage.propTypes = {
    message: PropTypes.string
};

export default function errorMessage({message = 'Error'}) {
    return(
        <h2 className="loading-error">{message}</h2>
    )
}