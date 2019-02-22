import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Home from './Home';
import BuyTokens from './BuyTokens';
import Wallet from './Wallet';

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class Routes extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router history={history}>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/contribute" component={BuyTokens} />
          <Route path="/wallet" component={Wallet} />
        </>
      </Router>
    );
  }
}

export default Routes;
