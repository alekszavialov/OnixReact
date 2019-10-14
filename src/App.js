import React, { Component } from 'react';
import {
  Switch, Router, Route, Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page';
import Home from './components/pages/Home/Home';

import { ThemeProvider, themes } from './context/ThemeContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      themeColor: themes.light.themeName
    };
  }

  changeThemeColor = () => {
    const { themeColor } = this.state;
    const theme = themeColor === themes.light.themeName ? themes.dark.themeName : themes.light.themeName;
    this.setState({
      themeColor: theme
    });
  };

  render() {
    const { themeColor } = this.state;
    return (
      <Router history={this.history}>
        <ThemeProvider value={{ theme: themeColor, changeThemeColor: this.changeThemeColor }}>
          <Page>
            <Switch>
              <Route exact strict path="/" component={Home} />
              <Redirect to="/404" />
            </Switch>
          </Page>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
