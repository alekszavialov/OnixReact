import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PageView from './PageView';
import PageNotFound from '../../elements/PageNotFound/PageNotFound';

function Page({ location: { pathname }, children }) {
  const [displayButtons, setDisplayButtons] = useState({ upButton: false, downButton: false });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  const checkScroll = () => {
    const { upButton, downButton } = displayButtons;
    const scroll = window.pageYOffset;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const delimeter = 100;
    const updatedUpButton = scroll >= delimeter;
    const updatedDownButton = scroll <= windowHeight - delimeter;
    if (updatedUpButton !== upButton || updatedDownButton !== downButton) {
      setDisplayButtons({
        upButton: updatedUpButton,
        downButton: updatedDownButton
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });


  if (pathname === '/404') {
    return (
      <PageNotFound />
    );
  }
  const { upButton, downButton } = displayButtons;
  return (
    <PageView
      childrens={children}
      upButton={upButton}
      downButton={downButton}
      scrollToTop={scrollToTop}
      scrollToBottom={scrollToBottom}
    />
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};


export default withRouter(Page);
