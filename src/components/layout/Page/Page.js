import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';
import PageNotFound from '../../elements/PageNotFound/PageNotFound';

class Page extends Component {
  render() {
    const { location, children } = this.props;
    const { pathname } = location;
    if (pathname === '/404') {
      return (
        <PageView childrens={<PageNotFound />} />
      );
    }
    return (
      <>
        <Header />
        <PageView childrens={children} />
        <Footer />
      </>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

Page.defaultProps = {
  children: ('Page'),
  location: {
    pathname: '/'
  }
};


export default withRouter(Page);
