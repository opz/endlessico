import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default props => {
  const { web3, accounts, children } = props;

  return (
    <>
      <Navigation title="Endless ICO" web3={web3} accounts={accounts}>
        {children}
        <Footer />
      </Navigation>
    </>
  );
};
