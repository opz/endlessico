import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import logo from './EndlessICO.svg';

export default props => {
  const { web3, accounts, children } = props;

  return (
    <>
      <Navigation
        logo={logo}
        web3={web3}
        accounts={accounts}
      >
        {children}
        <Footer />
      </Navigation>
    </>
  );
};
