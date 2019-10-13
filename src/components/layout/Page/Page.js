import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PageView from './PageView';
import PageNotFound from '../../elements/PageNotFound/PageNotFound';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayButtons: {
        upButton: false,
        downButton: false
      }
    };
  }

  componentDidMount() {
    this.checkScroll();
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }

  checkScroll = () => {
    const { displayButtons: { upButton, downButton } } = this.state;
    const scroll = window.pageYOffset;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const delimeter = 100;
    const updatedUpButton = scroll >= delimeter;
    const updatedDownButton = scroll <= windowHeight - delimeter;
    if (updatedUpButton !== upButton || updatedDownButton !== downButton) {
      this.setState({
        displayButtons: {
          upButton: updatedUpButton,
          downButton: updatedDownButton
        }
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  render() {
    const { location, children } = this.props;
    const { pathname } = location;
    if (pathname === '/404') {
      return (
        <PageNotFound />
      );
    }
    const { displayButtons: { upButton, downButton } } = this.state;
    return (
      <PageView
        childrens={children}
        upButton={upButton}
        downButton={downButton}
        scrollToTop={this.scrollToTop}
        scrollToBottom={this.scrollToBottom}
      />
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
