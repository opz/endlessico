import React from 'react';
import { Card, Grid, Image, } from 'semantic-ui-react';
import Layout from './Layout';

import './MetaMask.css';

import metamask from './metamask.svg';

export default props => {
  const { web3 } = props;

  return(
    <Layout web3={web3}>
      <div className="MetaMask">
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Card
                centered
                target="_blank"
                href="https://metamask.io/"
                className="installMetaMaskCard"
              >
                <Image fluid src={metamask} />
                <Card.Content>
                  <Card.Header>Install MetaMask to continue</Card.Header>
                  <Card.Description>MetaMask is required to use the Endless DApp to purchase tokens.</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
  );
};
