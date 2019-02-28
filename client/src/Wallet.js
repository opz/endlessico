import _ from 'lodash';
import React, { Component } from 'react';
import withWeb3 from './utils/withWeb3';
import { withToken } from './utils/withContract';
import { Card, Grid, Header, Image } from 'semantic-ui-react';
import Layout from './Layout';

import './Wallet.css';

import logo from './EndlessICO.svg';

class Wallet extends Component {
  state = {
    amount: '0',
    symbol: ''
  };

  async componentDidUpdate(prevProps) {
    const { web3, accounts, token } = this.props;

    const tokenChanged = token !== prevProps.token;
    const accountsAvailable = accounts && accounts.length;

    if (tokenChanged && accountsAvailable) {
      try {
        const tknbits = await token.methods.balanceOf(accounts[0]).call();

        // Token uses 18 decimal places so use wei conversion for display
        const tkns = web3.utils.fromWei(tknbits, 'ether');

        const amount = parseFloat(tkns).toLocaleString();

        const symbol = await token.methods.symbol().call();

        this.setState({ amount, symbol });
      } catch(error) {
        console.error(error);
      }
    }
  }

  render() {
    const { web3, accounts } = this.props;
    const { amount, symbol } = this.state;

    return (
      <Layout web3={web3}>
        <div className="Wallet">
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <Card centered>
                  <Card.Content>
                    <Image src={logo} />
                  </Card.Content>
                  <Card.Content textAlign="center">
                    <Card.Header>{amount} {symbol}</Card.Header>
                    <Card.Meta className="WalletAddress">
                      {accounts && accounts[0]}
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content textAlign="center">
                    <Header as="h6" className="title">
                      <span className="secondary color">&Sigma;</span>NDLESS
                    </Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default _.flowRight(
  withWeb3(true),
  withToken()
)(Wallet);
