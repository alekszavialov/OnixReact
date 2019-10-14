import React from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from '../../../context/ThemeContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import '../../../scss/components/layout/page/page.scss';

export default function PageView({
  childrens, upButton, downButton, scrollToTop, scrollToBottom 
}) {
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <div className={`app ${theme}`}>
            <Header />
            {upButton
            && <button type="button" className="pageNavigation upPageButton" onClick={scrollToTop}>Up</button>}
            {downButton
            && <button type="button" className="pageNavigation downPageButton" onClick={scrollToBottom}>Down</button>}
            {childrens}
            <Footer />
          </div>
        )
      }
    </ThemeConsumer>
  );
}

PageView.propTypes = {
  childrens: PropTypes.node.isRequired,
  upButton: PropTypes.bool,
  downButton: PropTypes.bool,
  scrollToTop: PropTypes.func,
  scrollToBottom: PropTypes.func
};

PageView.defaultProps = {
  upButton: false,
  downButton: false,
  scrollToTop: undefined,
  scrollToBottom: undefined
};
