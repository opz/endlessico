import React from 'react';
import withWeb3 from './utils/withWeb3';
import { Container, Divider, Item, Header } from 'semantic-ui-react';
import Layout from './Layout';
import PageHeader from './PageHeader';

import './Home.css';

import ethereum from './ethereum.svg';

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
          subtitle="Decentralized valueless tokens"
          callToAction="Purchase Tokens"
          onCallToAction={() => history.push('/contribute')}
          fullscreen
        />
        <Header as="h1" textAlign="center">
          Invest in abstract non-fungible tokens
          <Header.Subheader>
            Each token is meaningless, all they do is get more expensive with every purchase.
          </Header.Subheader>
        </Header>
        <Divider hidden section />
        <Container text>
          <Item.Group>
            <Item>
              <Item.Image src={ethereum} style={{ opacity: '0.667' }}/>
              <Item.Content verticalAlign="middle">
                <Item.Header>
                  The most unnecessary token for Ethereum
                </Item.Header>
                <Item.Description>
                  As tokens are minted through contributions to the Endless ICO, the cost of each token increases.
                </Item.Description>
                <Item.Description>
                  The Endless token has no purpose other than getting more expensive.
                </Item.Description>
                <Item.Extra>
                  Endless is an ERC-20 token for the Ethereum blockchain.
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      </div>
    </Layout>
  );
});
