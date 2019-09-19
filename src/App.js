import React, {Component} from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Page from './components/layout/Page/Page';
import Home from './components/pages/Home/Home';
import ErrorPage from "./components/layout/404/ErrorPage";

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
                        <Route component={ErrorPage}/>
                    </Switch>
                </Page>
            </Router>
        );
    }
}

export default App;