import React, {Fragment} from 'react';

import Header from '../scenes/Header';
import Footer from '../scenes/Footer';
import Home from '../scenes/Home';

import './styles.css';

function App() {
  return (
      <Fragment>
          <Header/>
          <Home/>
          <Footer/>
      </Fragment>

  );
}

export default App;
