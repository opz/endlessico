import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Layout from './Layout';
import BuyTokens from './BuyTokens';

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
    const { children } = this.props;

    return (
      <Router history={history}>
        <Layout>
          {children}
        </Layout>
        <Route exact path="/" component={BuyTokens} />
      </Router>
    );
  }
}

export default Routes;
