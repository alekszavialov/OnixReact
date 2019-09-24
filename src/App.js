import React, { Component } from 'react';
import {
  Switch, Router, Route, Redirect 
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page';
import Home from './components/pages/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  // componentDidMount() {
  //   const { hash } = this.history.location;
  //   if (hash !== '') {
  //     setTimeout(
  //       () => {
  //         const id = hash.replace('#', '');
  //         const element = document.getElementById(id);
  //         if (element) {
  //           console.log(element);
  //           console.log(element.offsetTop);
  //           console.log(document.body.clientHeight);
  //           element.scrollIntoView({ behavior: 'smooth' });
  //         }
  //       },
  //       0
  //     );
  //   }
  // }

  render() {
    return (
      <Router history={this.history}>
        <Page>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Redirect to="/404" />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
