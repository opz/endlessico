import _ from 'lodash';
import React, { Component } from 'react';
import withWeb3 from './utils/withWeb3';
import { withCrowdsale, withToken } from './utils/withContract';
import {
  Container,
  Divider,
  Form,
  Header,
  Input,
  List,
  Message,
  Segment,
  Statistic
} from 'semantic-ui-react';
import Layout from './Layout';
import PageHeader from './PageHeader';
import Chart from './Chart';

import './BuyTokens.css';

class BuyTokens extends Component {
  state = {
    address: '',
    amount: '0.5',
    symbol: '',
    rate: '0',
    minContribution: '0',
    tokensSold: '0',
    tokensToBuy: '0',
    loading: false,
    errorMessage: ''
  };

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  updateTokenStats = async () => {
    const { web3, token } = this.props;

    try {
      const totalSupply = await token.methods.totalSupply().call();

      // Token uses 18 decimal places so use wei conversion for display
      const tokensSold = parseInt(web3.utils.fromWei(totalSupply, 'ether'))
        .toLocaleString();

      const symbol = await token.methods.symbol().call();

      this.setState({ symbol, totalSupply, tokensSold });
    } catch(error) {
      this.setState({ errorMessage: error.message });
    }
  };

  updateTokensToBuy = async () => {
    const { web3, crowdsale } = this.props;
    const { amount, minContribution } = this.state;

    let wei = '0';
    let errorMessage = '';

    try {
      wei = web3.utils.toWei(amount, 'ether');
      const tokenAmount = await crowdsale.methods.getTokenAmount(wei).call();

      // Token uses 18 decimal places so use wei conversion for display
      const tokensToBuy = web3.utils.fromWei(tokenAmount, 'ether');

      if (web3.utils.toBN(wei).lt(web3.utils.toBN(minContribution))) {
        const minContribEther = web3.utils.fromWei(minContribution, 'ether');
        errorMessage = `Contribution must be at least ${minContribEther}`;
      }

      this.setState({ tokensToBuy });
    } catch(error) {
      errorMessage = error.message;
    }

    this.setState({ errorMessage });
  };

  async componentDidUpdate(prevProps) {
    const { accounts, crowdsale, token } = this.props;

    if (accounts !== prevProps.accounts) {
      this.setState({ address: accounts && accounts[0] });
    }

    if (crowdsale !== prevProps.crowdsale) {
      try {
        const rate = await crowdsale.methods.rate().call();
        const minContribution = await crowdsale.methods.minContribution().call();

        this.setState({ rate, minContribution });
      } catch(error) {
        this.setState({ errorMessage: error.message });
      }

      // Update tokens to buy when crowdsale contract is set
      await this.updateTokensToBuy();
    }

    if (token !== prevProps.token) {
      await this.updateTokenStats();
    }
  }

  onChange = (event, { name, value }) => this.setState({ [name]: value });

  onCallToAction = () => {
    this.formRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    const { web3, accounts, crowdsale } = this.props;
    const { address, amount } = this.state;

    try {
      await crowdsale.methods.buyTokens(address).send({
        from: accounts[0],
        value: web3.utils.toWei(amount, 'ether')
      });

      this.setState({ amount: '' });

      this.updateTokenStats();
    } catch(error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const { web3, token, crowdsale } = this.props;
    const {
      address,
      amount,
      symbol,
      rate,
      totalSupply,
      tokensSold,
      tokensToBuy,
      loading,
      errorMessage
    } = this.state;

    const title = (
      <>
        <span className="secondary color">&Sigma;</span>
        NDLESS
      </>
    );

    // The "+" rounds to a maximum number of decimal places
    // E.g. 0.1 instead of 0.10000000
    const tokenPrice = +(totalSupply / (rate || totalSupply)).toFixed(8);

    const updateTokensToBuy = _.debounce(this.updateTokensToBuy, 300);

    return (
      <Layout web3={web3}>
        <div className="BuyTokens">
          <PageHeader
            title={title}
            subtitle="Decentralized valueless tokens"
            callToAction="Purchase Tokens"
            onCallToAction={this.onCallToAction}
          />
          <Container text>
            <Segment>
              <Statistic.Group size="tiny" widths={3}>
                <Statistic>
                  <Statistic.Value>
                    &Xi;{tokenPrice}
                  </Statistic.Value>
                  <Statistic.Label>
                    Last Token Price
                  </Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>
                    {tokensSold}
                  </Statistic.Value>
                  <Statistic.Label>
                    Tokens Sold
                  </Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>
                    {symbol}
                  </Statistic.Value>
                  <Statistic.Label>
                    Symbol
                  </Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Segment>
            <Divider hidden section />
            <Header as="h4">Instructions</Header>
            <List bulleted size="small">
              <List.Item>Enter the address you wish your tokens to be sent to.</List.Item>
              <List.Item>Enter the amount of ETH you wish to contribute.</List.Item>
              <List.Item>Submit the form and confirm the MetaMask transaction to receive your tokens.</List.Item>
            </List>
            <Divider hidden />
            <div ref={this.formRef}>
              <Form
                loading={loading}
                error={!!errorMessage}
                onSubmit={this.onSubmit}
              >
                <Form.Input
                  required
                  label="Address"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                />
                <Form.Group>
                  <Form.Field required width={8}>
                    <label>Amount (ETH)</label>
                    <Input
                      label={{ basic: true, content: <>&Xi;</> }}
                      name="amount"
                      value={amount}
                      onChange={(event, data) => {
                        this.onChange(event, data);
                        updateTokensToBuy();
                      }}
                    />
                  </Form.Field>
                  <Form.Field width={8}>
                    <label>Tokens</label>
                    <Input
                      label={{ basic: true, content: symbol }}
                      labelPosition="right"
                      value={tokensToBuy}
                    />
                  </Form.Field>
                </Form.Group>
                <Message error header="Error" content={errorMessage} />
                <Form.Button primary disabled={!crowdsale}>
                  Purchase Tokens
                </Form.Button>
              </Form>
            </div>
            <Divider hidden section />
            <Chart web3={web3} token={token} />
          </Container>
        </div>
      </Layout>
    );
  }
}

export default _.flowRight(
  withWeb3(true),
  withCrowdsale(),
  withToken()
)(BuyTokens);
