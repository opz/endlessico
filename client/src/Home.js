import React from 'react';
import withWeb3 from './utils/withWeb3';
import Layout from './Layout';
import PageHeader from './PageHeader';

import './Home.css';

export default withWeb3(false)(props => {
  const { history, web3 } = props;

  const title = (
    <>
      <span className="secondary color">&Sigma;</span>
      NDLESS
    </>
  );

  return (
    <Layout web3={web3}>
      <div className="Home">
        <PageHeader
          title={title}
          subtitle="The ICO that never ends"
          callToAction="Purchase Tokens"
          onCallToAction={() => history.push('/contribute')}
          fullscreen
        />
      </div>
    </Layout>
  );
});
