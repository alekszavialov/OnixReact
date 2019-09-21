import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';
import PageNotFound from "../../elements/PageNotFound/PageNotFound";

class Page extends Component {

    render() {
        const {pathname} = this.props.location;
        if (pathname === '/404'){
            return (
                <PageView {...<PageNotFound/>}/>
            )
        }
        return (
            <Fragment>
                <Header/>
                <PageView {...this.props.children}/>
                <Footer/>
            </Fragment>
        )
    }

}

Page.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    })
};

Page.defaultProps = {
    location: {
        pathname: '/'
    }
};


export default withRouter(Page);