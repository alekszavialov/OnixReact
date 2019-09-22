import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../../assets/images/404.jpg';

import '../../../scss/components/elements/PageNotFound/pageNotFound.scss';

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <img alt="error" src={PageNotFoundImage} />
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
}
