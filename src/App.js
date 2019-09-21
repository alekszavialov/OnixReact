import React, {Component} from 'react';
import {Switch, Router, Route, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Page from './components/layout/Page/Page';
import Home from './components/pages/Home/Home';

class App extends Component {

    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }

    render() {
        return (
            <Router history={this.history}>
                <Page>
                    <Switch>
                        <Route exact strict path="/" component={Home}/>
                        <Redirect to="/404"/>
                    </Switch>
                </Page>
            </Router>
        );
    }
}

export default App;