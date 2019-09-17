import React, {Component} from 'react';
import Page from './layout/Page/Page';
import Home from './pages/Home/Home';

class App extends Component {



    render() {
        return (
            <Page>
                <Home/>
            </Page>
        );
    }
}

export default App;