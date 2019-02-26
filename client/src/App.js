import React, { Component } from 'react';
import Routes from './Routes';

import 'semantic-ui-forest-themes/semantic.yeti.min.css';
import './App.css';
import 'typeface-open-sans';
import 'typeface-lato';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
