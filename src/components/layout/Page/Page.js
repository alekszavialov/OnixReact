import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';

class Page extends Component {

    render() {
        const {children} = this.props;
        console.log(this.props);
        return (
            <Fragment>
                <Header/>
                <PageView {...this.props.children}/>
                <Footer/>
            </Fragment>
        )
    }

}

export default withRouter(Page);