import React, {Component} from 'react';
import Page from './components/layout/Page/Page';

class App extends Component {



    render() {
        return (
            <Page>
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </Page>
        );
    }
}

export default App;