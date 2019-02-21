import React, { Component } from 'react';
import withWeb3 from './utils/withWeb3';
import { withCrowdsale, withToken } from './utils/withContract';
import {
  Container,
  Divider,
  Form,
  Input,
  Message,
  Statistic
} from 'semantic-ui-react';
import Layout from './Layout';
import PageHeader from './PageHeader';

class BuyTokens extends Component {
  state = {
    address: '',
    value: '0.5',
    symbol: '',
    rate: '0',
    tokensSold: '0',
    loading: false,
    errorMessage: ''
  };

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  updateTokenStats = async () => {
    const { web3, token } = this.props;

    const totalSupply = await token.methods.totalSupply().call();

    // Token uses 18 decimal places so use wei conversion for display
    const tokensSold = parseInt(web3.utils.fromWei(totalSupply, 'ether'))
      .toLocaleString();

    const symbol = await token.methods.symbol().call();

    this.setState({ symbol, totalSupply, tokensSold });
  };

  async componentDidUpdate(prevProps) {
    const { accounts, crowdsale, token } = this.props;

    if (accounts !== prevProps.accounts) {
      this.setState({ address: accounts && accounts[0] });
    }

    if (crowdsale !== prevProps.crowdsale) {
      const rate = await crowdsale.methods.rate().call();
      this.setState({ rate });
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
    const { address, value } = this.state;

    try {
      await crowdsale.methods.buyTokens(address).send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether')
      });

      this.setState({ value: '' });

      this.updateTokenStats();
    } catch(error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const { web3, accounts, crowdsale } = this.props;
    const {
      address,
      value,
      symbol,
      rate,
      totalSupply,
      tokensSold,
      loading,
      errorMessage
    } = this.state;

    const title = (
      <>
        <span className="secondary color">&Sigma;</span>
        NDLESS
      </>
    );

    const tokenPrice = (totalSupply / (rate || totalSupply)).toFixed(8);

    return (
      <Layout web3={web3} accounts={accounts}>
        <div className="BuyTokens">
          <PageHeader
            title={title}
            subtitle="The ICO that never ends"
            callToAction="Purchase Tokens"
            onCallToAction={this.onCallToAction}
          />
          <Container text>
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
                <Form.Field required>
                  <label>Amount (ETH)</label>
                  <Input
                    label={{ basic: true, content: <>&Xi;</> }}
                    name="value"
                    value={value}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <Message error header="Error" content={errorMessage} />
                <Form.Button primary disabled={!crowdsale}>
                  Purchase Tokens
                </Form.Button>
              </Form>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default withWeb3(true)(withCrowdsale()(withToken()(BuyTokens)));
